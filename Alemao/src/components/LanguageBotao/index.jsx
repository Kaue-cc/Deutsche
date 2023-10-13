
import { useTranslation } from 'react-i18next'
import br from './assets/br.svg'
import us from './assets/us.svg'

const languageOption = [
    {
        name: "Portugues",
        value: "ptBR",
        flag: br,
    },
    {
        name: "English",
        value: "en",
        flag: us,
    },
]

export const LanguageBotao = () => {
    const { t, i18n } = useTranslation();
    return (

        <div className='language-botao'>
            <span>{t('selectYourLanguage')}</span>
        
            {languageOption.map(languageOption => (
                <button
                    key={languageOption.value}
                    onClick={() => {
                        i18n.changeLanguage(languageOption.value)
                    }}
                
                
                >
                    <img src={languageOption.flag} alt={languageOption.name}/>
                    <span>{languageOption.name}</span>
                </button>
            ))}
        </div>

    )
}