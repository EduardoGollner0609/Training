import { useContext } from 'react';
import { ContextProductCount } from '../../utils/context-products';
import './styles.css';

export default function Header() {

    const { contextProductCount } = useContext(ContextProductCount);
    return (
        <header>
            <nav>
                <h1>DSFilter</h1>
                <p>{contextProductCount} produto(s)</p>
            </nav>
        </header>
    );
}