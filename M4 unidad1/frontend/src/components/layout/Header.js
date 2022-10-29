import React from "react";
import "../../styles/components/layout.css";

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="contennedor">
                    <img src="image/logo.jpg" width="250" alt="musicshop" />
                    <h1>MusicShop</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;