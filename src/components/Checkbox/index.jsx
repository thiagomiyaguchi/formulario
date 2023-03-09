import './Checkbox.css';

export default function Checkbox(props) {
  const plataformaSelecionada = props.itens.filter(
    (plataformaAtual) => plataformaAtual.plataforma === props.plataforma
  );

  return plataformaSelecionada != '' ? (
    <div className='checkbox'>
      <label>Jogos:</label>

      <div className='opcoes'>
        {plataformaSelecionada[0].jogos.map((item, index) => (
          <div key={index} className='opcao'>
            <input type='checkbox' id={item} name={item} value={item} />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  ) : (
    ''
  );
}
