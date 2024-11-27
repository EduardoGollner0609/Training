import './styles.css';


export default function Filter() {
    return (
        <div className="filter">
            <input type="text" placeholder='Preço mínimo' />
            <input type="text" placeholder='Preço máximo' />
            <button>Filtrar</button>
        </div>);
}