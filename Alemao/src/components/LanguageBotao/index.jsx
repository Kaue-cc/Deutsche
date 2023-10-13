import { useTranslation } from 'react-i18next'; // Importa o hook useTranslation do react-i18next.
import './LanguageBotao.css'; // Importa estilos CSS para o componente.
import br from './assets/br.png'; // Importa a bandeira brasileira como um ícone.
import us from './assets/us.png'; // Importa a bandeira dos EUA como um ícone.
import de from './assets/de.png'; // Importa a bandeira alemã como um ícone.

// Define um array de opções de idioma com suas respectivas bandeiras.
const languageOption = [
    {
        name: "Portugues",
        value: "ptBR",
        flag: br
    },
    {
        name: "English",
        value: "en",
        flag: us
    },
    {
        name: "Deutsche",
        value: "de",
        flag: de
    },
]

// Exporta o componente LanguageBotao como uma função anônima.
export const LanguageBotao = () => {
    const { t, i18n } = useTranslation(); // Inicializa o hook useTranslation para obter as funções de tradução e i18n.

    return (
        <div className='language-botao'>
            {languageOption.map(languageOption => (
                <button
                    key={languageOption.value}
                    onClick={() => {
                        i18n.changeLanguage(languageOption.value); // Altera o idioma do aplicativo quando o botão é clicado.
                    }}
                >
                    <img src={languageOption.flag} alt={languageOption.name}></img> {/* Exibe a bandeira do idioma com o nome correspondente. */}
                </button>
            ))}
        </div>
    );
}
