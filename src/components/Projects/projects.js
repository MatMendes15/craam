import React from 'react';
import './projects.css';
import Projeto1 from "../../assets/Aceleração de particulas.png";
import Projeto2 from "../../assets/Astrofísica.png";
import Projeto3 from "../../assets/atividade estelar.png";
import Projeto4 from "../../assets/física solar.png";
import Projeto5 from "../../assets/Geofisisa espacial.png";
import Projeto6 from "../../assets/Radio astronomia.png";

const Projects = () => {
    return (
        <section id="projects"> 
            <h2 className="projetoTitle">Areas dos projetos</h2>
            <span className="projetoDesc">Aceleração de particulas, Astrofísica, atividade estelar, física solar, Geofisisa espacial e Radio astronomia</span>
            <div className="projetosImagens">
                <img src={Projeto1} alt="Aceleração de particulas" className="imagemProjeto" />
                <img src={Projeto2} alt="Astrofísica" className="imagemProjeto" />
                <img src={Projeto3} alt="atividade estelar" className="imagemProjeto" />
                <img src={Projeto4} alt="física solar" className="imagemProjeto" />
                <img src={Projeto5} alt="Geofisisa espacial" className="imagemProjeto" />
                <img src={Projeto6} alt="Radio astronomia" className="imagemProjeto" />
            </div> 
            <button className="projetoBtn" onclick="window.location.href = https://www.mackenzie.br/centro-de-radio-astronomia-e-astrofisica-mackenzie/pesquisa-e-desenvolvimento/projetos-em-andamento">Conhecer</button>
        </section>
    );
}

export default Projects