import { ProductDTO } from '../../models/product';
import './styles.css';

export default function Product({ name, price }: ProductDTO) {
    return (
        <div className="product">
            <p>{name}</p>
            <h3>R$ {price.toFixed(2)}</h3>
        </div>
    );
}