import { NavLink, Outlet } from 'react-router-dom';
import './styles.css';

export default function ProductPage() {
    return (
        <section id="section-product-page">
            <div className="product-page-content">
                <nav className="product-page-navegation">
                    <NavLink to="computers">
                        Computadores
                    </NavLink>
                    <NavLink to="eletronics">
                        Eletrônicos
                    </NavLink>
                    <NavLink to="books">
                        Livros
                    </NavLink>
                </nav>
                <Outlet />
            </div>
        </section>

    );
}