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
    </div>
  )
};

export default App;