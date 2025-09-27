import styles from './Contact.module.css'
import useLanguage from '../../Context/LanguageContext'


export default function Contact({info}){

    const {language} = useLanguage();

    return(
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h1>{language === "en" ? "Contact Information" : "Informations de contact"}</h1>
            </div>
            <div className={styles.contacts_container}>
                <div className={styles.contact_container}>
                    <span className="material-symbols-outlined">mail</span>
                    <a href={`mailto:${info.email}`}>{info.email}</a>
                    <span className={`material-symbols-outlined ${styles.move}`}>chevron_right</span>
                </div>

                <div className={styles.contact_container}>
                    <span><img src={'/icons/linkedin-in-icon.svg'} alt="linkedin" /></span>
                    <a href={`https://www.linkedin.com/in/${info.linkedIn}`} target="_blank" rel="noopener noreferrer">{info.linkedIn}</a>
                    <span className={`material-symbols-outlined ${styles.move}`}>chevron_right</span>
                </div>

                <div className={styles.contact_container}>
                    <div className={styles.phone_number_container}>
                        <div className={styles.in_line}>
                            <span class="material-symbols-outlined">call</span>
                            <p>{info.phone_number}</p>
                        </div>
                        <div className={styles.in_line}>
                            <span class="material-symbols-outlined">location_on</span>
                            <p>{info.address}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}