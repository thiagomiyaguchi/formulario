import './ListaSuspensa.css';

export default function ListaSuspensa(props) {
  function aoSelecionar(event) {
    // console.log(event.target.value);
    props.listarJogos(event);
  }
  return (
    <div className='lista-suspensa'>
      <label htmlFor={props.label}>{props.label}</label>
      <select onChange={aoSelecionar} name={props.label} id={props.label}>
        <option selected disabled hidden>
          {props.placeholder}
        </option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
