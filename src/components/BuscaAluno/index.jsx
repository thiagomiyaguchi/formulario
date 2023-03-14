import './BuscaAluno.css';

import '../Formulario/Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import turmas from '../../turmas.json';
import { useState } from 'react';
import axios from 'axios';
import Resultados from '../Resultados';
import { useQuery } from 'react-query';

export default function BuscaAluno() {
  const [plataforma, setPlataforma] = useState('');
  const [nome, setNome] = useState('');
  const [userName, setUserName] = useState('');
  const [turma, setTurma] = useState('');
  const [plataformas, setPlataformas] = useState([]);
  const [resultados, setResultados] = useState([]);
  const [filtros, setFiltros] = useState([]);

  const getAlunos = async () => {
    try {
      const resultadosGet = await axios.get(
        'http://localhost:5000/api/v1/alunos'
      );
      const listaPlataformas = resultadosGet.data.alunos.map(
        (item) => item.plataforma
      );
      const plataformasUnicas = [...new Set(listaPlataformas)];
      setPlataformas(plataformasUnicas);
      setResultados(resultadosGet.data.alunos);
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, isError, data, error } = useQuery('alunos', getAlunos);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFiltros(
      resultados
        .filter((item) => item.plataforma == plataforma)
        .filter((item) => item.turma == turma)
    );
  };

  // console.log(resultados);

  return (
    <>
      <form className='formulario' onSubmit={handleSubmit}>
        <CampoTexto
          name='nome'
          label='Nome:'
          valor={nome}
          fn={(e) => {
            setNome(e.target.value);
          }}
        />
        <ListaSuspensa
          itens={turmas}
          label='Turma:'
          placeholder='Selecione a sua turma'
          listar={(event) => setTurma(event.target.value)}
        />
        <ListaSuspensa
          itens={plataformas}
          label='Plataforma:'
          placeholder='Selecione a sua plataforma'
          listar={(event) => {
            setPlataforma(event.target.value);
          }}
        />
        <CampoTexto
          name='jogo'
          label='Jogo:'
          valor={userName}
          fn={(e) => {
            setUserName(e.target.value);
          }}
        />

        <Botao nome='Filtrar' />
      </form>
      {!isLoading && <Resultados itens={filtros} />}
    </>
  );
}
