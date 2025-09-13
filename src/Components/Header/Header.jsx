import styles from './Header.module.css'
import useLanguage from '../../Context/LanguageContext'

export default function Header({isHidden , isChat}) {

    const {language , toggleLanguage} = useLanguage();

    return(
        <div className={`${styles.header} ${isHidden ? styles.hidden: ""}`}>
            {isChat && <div className={styles.logo_container}>
                <a href="#">
                    <img src="/Me/me1.jpg" alt="" />
                </a>
            </div>}

            {!isChat && <div className={styles.cv_btn_container}>
                <a href="lien de cv" target="_blank" rel="noopener noreferrer"> {/* lien de cv ici*/}
                    <p className={styles.cv_complete_name}>Curriculum Vitae</p>
                    <p>CV</p>
                </a>
            </div>}

            <div className={styles.lang_btn_container}>
                <button onClick={toggleLanguage}>
                    <img src="/icons/langIcon.svg" alt="language icom" />
                    <p>{language === "fr" ? "en" : "fr"}</p>
                </button>
            </div>
        </div>
    )
}
