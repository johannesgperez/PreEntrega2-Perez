import CartWidget from "./CartWidget"
import '../styles/NavBar.css';
import logo from '../assets/logo.png';
import {NavLink, Link} from 'react-router-dom';


const NavBar = () => {

    return(
<nav className='nav-container'>
            <Link to="/">
                <div>
                    <img className="nav-brand" src={logo} alt="logo"/>
                </div>
            </Link>
            <div className='navegacion'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Stompboxes">Stompboxes</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Multi-Effectos">Multi-Efectos</NavLink>
                       <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Accesorios">Accesorios</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
export default NavBar