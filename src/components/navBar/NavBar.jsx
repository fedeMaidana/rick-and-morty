import SearchBar from '../SearchBar/SearchBar.jsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import navBarStyle from './navBar.module.css'

const Navbar = ({onSearch, onLogout}) => {

    return(
        <nav>
            <ul>
                <li>
                    <NavLink to='/home'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='about'>Sobre Mi</NavLink>
                </li>
            </ul>
            <SearchBar onSearch={onSearch}/>
            <button onClick={onLogout}>Cerrar Sesion</button>
        </nav>
    )
}

export default Navbar