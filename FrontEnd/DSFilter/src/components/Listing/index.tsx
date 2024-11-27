import './styles.css';
import Product from "../Product";
import { ProductDTO } from '../../models/product';

type Props = {
    products: ProductDTO[]
}

export default function Listing({ products }: Props) {
    return (
        <div className="listing">
            {
                products ?
                    products.map(product => (
                        <Product id={product.id} name={product.name} price={product.price} />
                    ))
                    :
                    <h1>Vazio</h1>
            }
        </div>
    );
}