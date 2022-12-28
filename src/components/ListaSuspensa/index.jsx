import './ListaSuspensa.css'

export default function ListaSuspensa(props){
    
    return(
        <div className="lista-suspensa">
            <label htmlFor="lista-suspensa">{props.label}</label>
            <select name="lista-suspensa" id="lista-suspensa">
                <option selected disabled hidden>{props.placeholder}</option>
                {props.itens.map((item)=>{
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}