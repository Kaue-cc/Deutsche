
import { useTranslation } from 'react-i18next'
import './LanguageBotao.css';
import br from './assets/br.png'
import us from './assets/us.png'
import dt from './assets/dt.png'

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
        name: "Deutshe",
        value: "dt",
        flag: dt
    },
]

export const LanguageBotao = () => {
    const { t, i18n } = useTranslation();
    return (

        <div className='language-botao'>

            {languageOption.map(languageOption => (
                <button
                    key={languageOption.value}
                    onClick={() => {
                        i18n.changeLanguage(languageOption.value)
                    }}
                >
                    <img src={languageOption.flag} alt={languageOption.neme}></img>
                </button>
            ))}
        </div>

    )
}