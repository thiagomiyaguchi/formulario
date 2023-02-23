import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Checkbox from "../Checkbox";
import Botao from "../Botao";
import turmas from "../../turmas.json";
import jogosPorPlataformas from "../../jogosPorPlataforma.json";
import { useState } from "react";

export default function Formulario() {
  const [plataforma, setplataforma] = useState("");
  const [nome, setNome] = useState("");
  const [userName, setUserName] = useState("");

  const plataformas = jogosPorPlataformas.map((item) => item.plataforma);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <CampoTexto
        name="nome"
        label="Nome:"
        valor={nome}
        fn={(e) => {
          setNome(e.target.value);
        }}
      />
      <ListaSuspensa
        itens={turmas}
        label="Turma:"
        placeholder="Selecione a sua turma"
        listarJogos={(event) => console.log("oi")}
      />
      <ListaSuspensa
        itens={plataformas}
        label="Plataforma:"
        placeholder="Selecione a sua plataforma"
        listarJogos={(event) => {
          setplataforma(event.target.value);
        }}
      />
      <CampoTexto
        name="userName"
        label="User Name:"
        valor={userName}
        fn={(e) => {
          setUserName(e.target.value);
        }}
      />
      <Checkbox itens={jogosPorPlataformas} plataforma={plataforma} />
      <Botao />
    </form>
  );
}
