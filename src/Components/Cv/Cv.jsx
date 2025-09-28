import styles from './Cv.module.css'
import useLanguage from '../../Context/LanguageContext'

export default function Cv({cv}){

    const {language} = useLanguage();

    return (
        <div className={styles.cv_container}>
            <a href={cv.link} target="_blank" rel="noopener noreferrer">
                <div className={styles.left_section}>
                    <div className={styles.left_section_icon}>
                        <div className={styles.file_icon}>
                            <span class="material-symbols-outlined">contact_page</span>
                        </div>
                    </div>
                    <div className={styles.left_section_main}>
                        <div className={styles.cv_name}>
                            <h1>{cv.name}</h1>
                        </div>
                        <div className={styles.cv_details}>
                            <p>{cv.type}</p>
                            <span></span>
                            {language === "en" ? 
                                <p>{`updated ${cv.updatedOn.toLocaleString("en-EN", { month: "long" })} ${cv.updatedOn.getFullYear()}`}</p>
                                : <p>{`mise à jour ${cv.updatedOn.toLocaleString("fr-FR", { month: "long" })} ${cv.updatedOn.getFullYear()}`}</p>
                            }
                            <span></span>
                            <p>{`${cv.size} MB`}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.right_section}>
                        <a href={cv.link} target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-outlined" style={{color : "white"}}>download</span>
                        </a>
                </div>
            </a>
        </div>
    )
}