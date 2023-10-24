import { useTranslation } from "react-i18next";
import React from 'react';
import { LinguagemBotao } from "./components/LinguagemBotao";

import Instagram from './assets/instagram.svg';
import Linkedin from './assets/linkedin.svg';
import Github from './assets/github.svg';

import "./App.css"

const App = () => {

  const { t } = useTranslation();

  return (
    <div className="App">

      <header className="App-header">

        <LinguagemBotao />
        <h1>{t("welcome")}</h1>

      </header>

      <main>

        <div className="imgCultura">
          <h1 className="Titulo">
            {t("Titulo")}
          </h1>
          <h1 className="culturaTitulo">
            {t("culturaTitulo")}
          </h1>
        </div>

        <div className="culturaDIV">
          <div className="culturaDivConteudo">
            <img src="./img/bebida.jpg"></img>
            <h3>{t("culturaTexto")}</h3>
          </div>
        </div>

        <div className="imgTurismo">
          <h1 className="turismoTitulo">
            {t("turismoTitulo")}
          </h1>
        </div>

        <div className="turismoDIV">
          <div className="turismoDivConteudo">
            <img src="./img/comida.jpg"></img>
            <h3>{t("turismoTexto")}</h3>
          </div>
        </div>

        <div className="imgOktober">
          <h1 className="OktoberTitulo">
            {t("oktoberTitulo")}
          </h1>
        </div>

        <div className="OktoberDIV">
          <div className="OktoberDivConteudo">
            <img src="./img/choop2.jpg"></img>
            <h3>{t("oktoberTexto")}</h3>
          </div>
        </div>

        <div className="imgMe">
          <h1 className="MeTitulo">
            {t("meTitulo")}
          </h1>
        </div>

        <div className="MeDIV">
          <div className="MeDivConteudo">
            <div className="MeTeste">
              <h3>{t("meTexto")}</h3>
            </div>
            <icons />
            <ul class="wrapper">
              <a href="https://www.instagram.com/3am.kaue/"><img src={Instagram} alt="Ícone SVG" className="icon" /></a>
              <a href="https://www.linkedin.com/in/kau%C3%AA-corr%C3%AAa-colling-7a31ba291"><img src={Linkedin} alt="Ícone SVG" className="icon" /></a>
              <a href="https://github.com/Kaue-cc"><img src={Github} alt="Ícone SVG" className="icon" /></a>
            </ul>
          </div>
        </div>

      </main>

    </div>
  )
};

export default App;