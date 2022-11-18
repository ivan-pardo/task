import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (propos) =>{
    return(
        <header>
            <img src='image/logo.jpg' width='250' alt='logomusicshop' />
            <h1>MusicShop</h1>
        </header>
    );
}

export default Header;