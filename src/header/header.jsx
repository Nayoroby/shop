import React, { useState } from 'react';
import logo from "../../public/logo-img.svg";
import basketImg from "../../public/basket.svg";
import "./header.scss";

const Header = ({burgerOpen, setBurgerOpen, cartState, setCartState}) => {


    return (
        <header className='header'>
            <div className="header__container">
                <div className="header__logo">
                    <img src={logo} className='header-logo__img' alt="" />
                    <h2 className="header-logo__text">SHOP</h2>
                </div>
                <nav className={burgerOpen === 'none' ? 'header__nav' : 'header__nav active'}>
                    <ul className="header__list">
                        <a href='#!' className='header__item' onClick={() => console.log(burgerOpen)}>home</a>
                        <a href='#!' className='header__item'>history</a>
                        <a href='#!' className='header__item'>about</a>
                    </ul>
                </nav> 
                <div className="header__btns">
                    <div className={burgerOpen === 'none'? 'burger' : 'burger active'} onClick={burgerOpen === 'none'? () =>  setBurgerOpen('active') : () =>  setBurgerOpen('none')}>
                        <span></span>
                    </div>
                    <img src={basketImg} alt="" className="header-btns__basket" onClick={() => setCartState('active')}/>
                    <button className='header-btns__call'>call us</button>
                </div>
            </div>
        </header>
    );
};

export default Header;