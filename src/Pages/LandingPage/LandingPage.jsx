import styles from './LandingPage.module.css'
import QuestionSelect from '../../Components/QuestionSelect/QuestionSelect'
import QuestionButton from '../../Components/QuestionButton/QuestionButton'
import CvButton from '../../Components/CvButton/CvButton'
import useLanguage from '../../Context/LanguageContext'


export default function LandingPage(){

    const {data , language , toggleLanguage} = useLanguage();

    return(
        <div className={styles.LandingPage}>
            <div className={styles.header}>
                <div className={styles.cv_btn_container}><CvButton/></div>
                <div className={styles.lang_btn_container}>
                    <button onClick={toggleLanguage}>
                        <img src="/icons/langIcon.svg" alt="language icom" />
                        <p>{language === "fr" ? "en" : "fr"}</p>
                    </button>
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.title_container}>
                    <h3 className={styles.name}>Nacim Makedhi</h3>
                    <h1 className={styles.job}>Junior Fullstack Dev & DevOps</h1> 
                </div>
                <div className={styles.img_container}>
                    <img src="/Me/me1.jpg" alt="Image Of Me" />
                </div>
                <div className={styles.question_feilds_container}>
                    <QuestionSelect/>
                    <div className={styles.question_buttons_container}>
                        {data.map(feild => <QuestionButton text={feild.name} icon={feild.icon}/>)}
                    </div>
                </div>
            </div>  
        </div>
    )
}