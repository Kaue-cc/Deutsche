import { useTranslation } from "react-i18next";
import Dropdown from "./components/Dropdown";
import React from 'react';
import { LanguageBotao } from "./components/LanguageBotao";

const App = () => {

  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <LanguageBotao />
        <h1>{t("welcome")}</h1>
        <h2>{t("whereYouCan")}</h2>
      </header>
    </div>
  )
};

export default App;