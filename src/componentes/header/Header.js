import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import unicorn from './assets/img/unicorn.png'

const Header = () => {
    const [showNav, setShowNav] = useState(false)

    const show = () => {
        setShowNav(!showNav)
    }

    return (

        <header className="container">
            <nav className="menu">

            <Link  to="/"><img className="logo" src={unicorn} alt="logo" /></Link>
                <div className="burguer-menu" onClick={show}>
                    <div className="burguer"></div>
                </div>

                <ul className={showNav !== true ? 'ul-header' : 'ul-header show-ul'}>
                  <li className="li-header"><Link onClick={show} className="link" to="/">Home</Link></li>
                  <li className="li-header"><Link onClick={show} className="link" to="/about">Sobre</Link></li>
                  <li className="li-header"><Link onClick={show} className="link" to="/portfolio">Portfólio</Link></li>
                  <li className="li-header"><Link onClick={show} className="link" to="/contact">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header