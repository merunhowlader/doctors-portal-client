import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from './../NavBar/NavBar';
import './Header.css'
import BusinessInfo from './../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="header-container">
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;