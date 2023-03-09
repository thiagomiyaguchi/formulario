import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Checkbox from '../Checkbox';
import Botao from '../Botao';
import turmas from '../../turmas.json';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Formulario() {
  const [plataforma, setplataforma] = useState('');
  const [nome, setNome] = useState('');
  const [userName, setUserName] = useState('');
  const [turma, setTurma] = useState('');
  const [plataformas, setPlataformas] = useState([]);
  const [jogos, setJogos] = useState([]);

  const getJogos = async () => {
    try {
      const jogos = await axios.get('http://localhost:5000/api/v1/jogos');
      setJogos(jogos.data);
      setPlataformas(jogos.data.map((item) => item.plataforma));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJogos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/v1/alunos', {
        nome: nome,
        username: userName,
        plataforma: plataforma,
        turma: turma,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
          setplataforma(event.target.value);
        }}
      />
      <CampoTexto
        name='userName'
        label='User Name:'
        valor={userName}
        fn={(e) => {
          setUserName(e.target.value);
        }}
      />
      <Checkbox itens={jogos} plataforma={plataforma} />
      <Botao nome='Cadastrar' />
    </form>
  );
}
