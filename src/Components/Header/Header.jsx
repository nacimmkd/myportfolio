import styles from './Header.module.css'
import useLanguage from '../../Context/LanguageContext'

export default function Header({ className , inChat}) {

    const {language , toggleLanguage} = useLanguage();

    if(inChat) {
        return
    }

    return(
        <div className={`${styles.header} ${className}`}>

            <div className={styles.cv_btn_container}>
                <a href="lien de cv" target="_blank" rel="noopener noreferrer"> {/* lien de cv ici*/}
                    <p className={styles.cv_complete_name}>Curriculum Vitae</p>
                    <p>CV</p>
                </a>
            </div>

            <div className={styles.lang_btn_container}>
                <button onClick={toggleLanguage}>
                    <img src="/icons/langIcon.svg" alt="language icom" />
                    <p>{language === "fr" ? "en" : "fr"}</p>
                </button>
            </div>
        </div>
    )
}
