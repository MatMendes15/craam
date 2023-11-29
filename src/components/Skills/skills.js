import React from 'react';
import './skills.css';
import UIDesign from '../../assets/sunIcon.png'
import WebDesign from '../../assets/SpaceIcon.png'
import AppDesign from '../../assets/soloTerrestreIcon.png'


const Skills = () => {
    return (
        <section id='Skills'>
            <span className="skillTitle">Sobre nós : </span> 
            <span className="skillDesc">O CRAAM é um centro de pesquisas operado mediante convênio entre o Instituto Presbiteriano Mackenzie e o MCT/INPE e tem como principais objetivos:</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="técnico-científicas" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Pesquisas técnico-científicas</h2>
                        <p>Pesquisas técnico-científicas de excelência nas áreas de Rádiociências, Física Solar, Explosões Solares, Relações Solares/Terrestres e Clima Espacial, Atmosfera Terrestre, Geodésia Espacial, Atividade Estelar e Exoplanetas, Instrumentação, Tecnologia Terahertz</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="recursos experimentais" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Operacionalização de recursos experimentais</h2>
                        <p>Operacionalização de recursos experimentais, destacando-se o Telescópio Solar Submilimétrico (SST), Rádio Telescópios Solares em Ondas Milimétricas (POEMAS), Estações de Rastreio em VLF (Brasil, Peru, Argentina e México), Experimento Espacial em Terahertz SOLAR-T, Telescópio Solar em 30THz e Visível, Rádio-Observatório Espacial do Nordeste, Rádio-Observatório do Itapetinga, Detectores de Partículas Cósmicas,  Sensores para detecção de neutrons solares e atmosféricos, Espectrometros raio-X e Gamma, Experimentos na Antártica, Campo Elétrico Terrestre.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Subsidio ao curso de Pós-Graduaçãoe em Ciencias e Aplicações Geoespaciais</h2>
                        <p>Subsidiar o Curso de Pós-Graduação em Ciências e Aplicações Geoespaciais, CAGE da UPM/EE. Suporte ao ensino e treinamento em níveis de iniciação científica, mestrado, doutorado e estagiários de pós-doutorado</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;