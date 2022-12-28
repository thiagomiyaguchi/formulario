import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from '../ListaSuspensa';
import Checkbox from '../Checkbox';
import Botao from '../Botao';
import turmas from '../../turmas.json'
import plataformas from '../../plataformas.json'
import jogos from '../../jogos.json'

export default function Formulario() {
    const consoles = jogos.map((item)=> item.plataforma)
    return(
        
        <form className="formulario">
        
                <CampoTexto label="Nome:" />
                <ListaSuspensa itens={turmas} label="Turma:" placeholder="Selecione a sua turma" />
                <ListaSuspensa itens={consoles} label="Plataforma:" placeholder="Selecione a sua plataforma"/>
                <CampoTexto label="User Name:" />
                <Checkbox/>
                <Botao />
         
        </form>
        
    );
}