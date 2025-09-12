import styles from './LandingPage.module.css'
import QuestionSelect from '../../Components/QuestionSelect/QuestionSelect'
import QuestionButton from '../../Components/QuestionButton/QuestionButton'
import CvButton from '../../Components/CvButton/CvButton'
import useLanguage from '../../Context/LanguageContext'
import { useState } from 'react'


export default function LandingPage(){

    const [isImgOpen , setIsImgOpen] = useState(false);
    const {data , language , toggleLanguage} = useLanguage();


    const handleImageClick = () => {
        setIsImgOpen(prev => !prev)
    }


    return(
        <div className={styles.LandingPage} style={{backgroundColor : isImgOpen  ? "rgba(0, 0, 0, 0.412)" : ""}}>
            <div className={styles.header} style={{opacity : isImgOpen ? "0" : "1"}}>
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
                    <h3 className={styles.name}>{language === "en" ? "Hey, I’m" : "Bonjour, je suis"} Nacim 👋</h3>
                    <h1 className={styles.job}>Junior Fullstack Dev & DevOps</h1> 
                </div>
                <div className={styles.img_container}>
                    <img  className={`${isImgOpen ? styles.img_open : ""}`} 
                          onClick={handleImageClick}
                          src="/Me/me2.jpg" 
                          alt="Image Of Me" />
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