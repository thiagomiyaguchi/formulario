import './CampoTexto.css';

export default function CampoTexto(props) {
  return (
    <div className='campo-texto'>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={'text'} id={props.name} name={props.name} />
    </div>
  );
}
