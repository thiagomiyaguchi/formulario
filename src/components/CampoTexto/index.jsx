import './CampoTexto.css'

export default function CampoTexto(props){
    return(

    <div className='campo-texto'>
        <label htmlFor="nome">{props.label}</label>
        <input type={"text"} id="nome" name="nome" />
    </div>
       
    )
}