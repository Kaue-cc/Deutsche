import { useTranslation } from "react-i18next";
import React from 'react';
import { LanguageBotao } from "./components/LanguageBotao";
import "./App.css"

const App = () => {

  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <LanguageBotao />
        <h1>{t("welcome")}</h1>
      </header>
      <main>
        <div className="culturaDIV">
          <h1>{t("culturaTitulo")}</h1>
          <div className="culturaDivConteudo">
            <img src="./img/culturaAlema.jpg"></img>
            <h3>{t("culturaTexto")}</h3>
          </div>
        </div>
      </main>
    </div>
  )
};

export default App;