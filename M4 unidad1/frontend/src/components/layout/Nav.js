import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../../styles/components/layout.css";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/home" className={({ isActive }) => isActive ? "activo" : undefined}>HOME</NavLink></li>
                    <li><NavLink to="/clases" className={({isActive}) => isActive ? "activo" : undefined}>CLASES</NavLink></li>
                    <li><NavLink to="/productos" className={({ isActive}) => isActive ? "activo" : undefined}>PRODUCTOS</NavLink></li>
                    <li><NavLink to="/contacto" className={({isActive}) => isActive ? "activo" : undefined}>CONTACTO</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;