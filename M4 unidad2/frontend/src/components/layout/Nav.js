import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/components/layout/Nav.css';
const Nav = (props) => {
    return (
        <nav>
            <div className='holder'>
                <ul>
                    <li><NavLink to='/home' className={({isActive}) => isActive ? 'activo' : undefined}>Home</NavLink></li>
                    <li><NavLink to='/productos' className={({isActive}) => isActive ? 'activo' : undefined}>Productos</NavLink></li>
                    <li><NavLink to='/clases' className={({isActive}) => isActive ? 'activo' : undefined}>Clases</NavLink></li>
                    <li><NavLink to='/galeria' className={({isActive}) => isActive ? 'activo' : undefined}>Galeria</NavLink></li>
                    <li><NavLink to='/contacto' className={({isActive}) => isActive ? 'activo' : undefined}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;