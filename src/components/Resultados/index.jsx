import './Resultados.css';

function Resultados(props) {
  return (
    <div className='resultados'>
      {props.itens.alunos.map((item) => {
        return (
          <div className='aluno'>
            <div className='nome'>
              <p>{item.nome}</p>
              <p>{item.turma}</p>
            </div>
            <div className='lista'>
              <p>Plataforma: {item.plataforma}</p>
              <p>Username: {item.username}</p>

              <select name='lista' id='lista' defaultValue='Lista'>
                <option selected disabled hidden>
                  Lista de Jogos
                </option>
                <option value=''>Oi</option>
                <option value=''>Olá</option>
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Resultados;
