import React from 'react';
import './intro.css';
import bg from '../../assets/Doutor-CRAAM.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/btnImg.png'


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="bemVindo">O CRAAM</span>
                <span className="textoPrincipal">(Centro de Radioastronomia e Astrofísica Mackenzie)<span className="nomeIntro"></span> <br /> </span>
                <p className="introTexto">nasceu em 1960 na então Faculdade de Filosofia, Ciencias e Letras da Universidade, hoje integrando a Escola de Engenharia. <br /> É o primeiro centro no Brasil a desenvolver atividades nas áreas de radiociências, incluindo radioastronomia, física solar, relações solares-terrestres, física ionosfera, astrofísica, instrumentação radiocientífica e ciências espaciais.</p>
                <button href="https://www.mackenzie.br/centro-de-radio-astronomia-e-astrofisica-mackenzie/pesquisa-e-desenvolvimento/projetos-em-andamento" className="btn"><img src={btnImg} alt="Ver" className='btnImg'/> Projetos em Andamento abaixo </button>
            </div>
            <img src={bg} alt="Fundador" className="bg"/>
        </section>
    )
}

export default Intro;