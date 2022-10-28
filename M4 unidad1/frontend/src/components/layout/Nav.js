import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/clases">CLASES</Link></li>
                    <li><Link to="/productos">PRODUCTOS</Link></li>
                    <li><Link to="/contacto">CONTACTO</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;