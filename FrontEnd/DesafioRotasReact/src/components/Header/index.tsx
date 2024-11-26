import { Link, NavLink } from 'react-router-dom';
import './styles.css';
import homeIcon from '../../assets/home-icon.svg';


export default function Header() {
    return (<header>
        <nav className="navegation-header">
            <div className="navegation-options">
                <NavLink to="/home">
                    Início
                </NavLink>
                <NavLink to="/products">
                    Produtos
                </NavLink>
                <NavLink to="/about">
                    Sobre nós
                </NavLink>
            </div>

            <Link to="/home">
                <div className="navegation-home-icon">
                    <img src={homeIcon} alt="" />
                </div>
            </Link>


        </nav>
    </header >);
}