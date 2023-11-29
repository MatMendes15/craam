import React from 'react';
import './navbar.css';
import logo from '../../assets/Mackenzie-Logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/ContactUs.png';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Sobre nós</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Projetos</Link>
                <a href="https://www.mackenzie.br/centro-de-radio-astronomia-e-astrofisica-mackenzie/parceiros" className="desktopMenuListItem">Parceiros</a>
            </div>

            <button href="https://www.mackenzie.br/centro-de-radio-astronomia-e-astrofisica-mackenzie/parceiros" className="desktopMenuBtn">
            <a href="https://www.mackenzie.br/centro-de-radio-astronomia-e-astrofisica-mackenzie/contato" target="_blank" className="desktopMenuListItem">Contato</a>

                <img src={contactImg} alt="" className="desktopMenuImg" /></button>
        </nav>
    )
}

export default Navbar