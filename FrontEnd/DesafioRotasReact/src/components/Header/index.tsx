import { NavLink } from 'react-router-dom';
import './styles.css';
import homeIcon from '../../assets/home-icon.svg';


export default function Header() {
    return (<header>
        <nav>
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

            <div className="navegation-home-icon">
                <img src={homeIcon} alt="" />
            </div>

        </nav>
    </header >);
}