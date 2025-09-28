import styles from './Header.module.css'
import useLanguage from '../../Context/LanguageContext'

export default function Header({ className , inChat}) {

    const {data, language , toggleLanguage} = useLanguage();

    return(
        <div className={`${styles.header} ${className}`}>

            {!inChat && <div className={styles.cv_btn_container}>
                <a href={data[0].cv_link} target="_blank" rel="noopener noreferrer">
                    <p className={styles.cv_complete_name}>Curriculum Vitae</p>
                    <p>CV</p>
                </a>
            </div>}

            {inChat && <div className={styles.logo_container}>
                <a href="/">
                    <img src={data[0].user_photo} alt="Logo" />
                </a>
            </div>}

            {!inChat && <div className={styles.lang_btn_container}>
                <button onClick={toggleLanguage}>
                    <img src="/icons/langIcon.svg" alt="language icom" />
                    <p>{language === "fr" ? "en" : "fr"}</p>
                </button>
            </div>}
        </div>
    )
}
