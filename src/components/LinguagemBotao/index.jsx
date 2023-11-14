// Importa o hook useTranslation do react-i18next.
import { useTranslation } from 'react-i18next';

// Importa estilos CSS para o componente.
import './LinguagemBotao.css';

// Importa as bandeiras dos idiomas como ícones.
import br from './assets/br.png'; // Bandeira brasileira
import us from './assets/us.png'; // Bandeira dos EUA
import de from './assets/de.png'; // Bandeira alemã

// Importa o hook useEffect do React.
import { useEffect } from 'react';

// Define um array de opções de idioma com suas respectivas bandeiras.
const languageOption = [
  {
    name: 'Portugues',
    value: 'ptBR',
    flag: br,
  },
  {
    name: 'English',
    value: 'en',
    flag: us,
  },
  {
    name: 'Deutsche',
    value: 'de',
    flag: de,
  },
];

// Exporta o componente LinguagemBotao como uma função anônima.
export const LinguagemBotao = () => {
  // Inicializa o hook useTranslation para obter as funções de tradução e i18n.
  const { t, i18n } = useTranslation();

  // Efeito colateral para atualizar o título da página e o ícone quando o idioma é alterado.
  useEffect(() => {
    document.title = t('appTitle'); // Atualiza o título da página com a tradução correspondente.
    updateFavicon(); // Chama a função para atualizar o ícone do favicon.
  }, [i18n.language, t]); // Dependências: idioma e função de tradução.

  // Função para atualizar o ícone do favicon com base no idioma selecionado.
  const updateFavicon = () => {
    let favicon = '';

    // Mapeia a bandeira correspondente ao idioma selecionado.
    switch (i18n.language) {
      case 'ptBR':
        favicon = br;
        break;
      case 'en':
        favicon = us;
        break;
      case 'de':
        favicon = de;
        break;
      default:
        favicon = us; // Ícone padrão para o idioma não correspondente.
    }

    // Cria ou seleciona o elemento link do favicon no head do documento.
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');

    // Configura os atributos do link.
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = favicon;

    // Adiciona o link do favicon ao head do documento.
    document.getElementsByTagName('head')[0].appendChild(link);
  };

  // Renderiza o componente LinguagemBotao.
  return (
    <div className="language-botao">
      {/* Mapeia as opções de idioma para botões. */}
      {languageOption.map((languageOption) => (
        <button
          key={languageOption.value}
          onClick={() => {
            i18n.changeLanguage(languageOption.value); // Altera o idioma do aplicativo quando o botão é clicado.
          }}
        >
          <img src={languageOption.flag} alt={languageOption.name} /> {/* Exibe a bandeira do idioma com o nome correspondente. */}
        </button>
      ))}
    </div>
  );
};
