import styles from './LandingPage.module.css'
import Select from '../../Components/Select/Select'
import Block from '../../Components/Block/Block'
import CvButton from '../../Components/CvButton/CvButton'
import useLanguage from '../../Context/LanguageContext'
import { useState } from 'react'


export default function LandingPage(){

    const [isImgOpen , setIsImgOpen] = useState(false);
    const {data , language , toggleLanguage} = useLanguage();


    const handleImageClick = () => {
        if(isImgOpen) {setIsImgOpen(false)}
        else (setIsImgOpen(true))
    }


    return(
        <div className={styles.LandingPage}>
            <div className={`${styles.header} ${isImgOpen ? styles.on_image_open : ""}`}>
                <div className={styles.cv_btn_container}><CvButton/></div>
                <div className={styles.lang_btn_container}>
                    <button onClick={toggleLanguage}>
                        <img src="/icons/langIcon.svg" alt="language icom" />
                        <p>{language === "fr" ? "en" : "fr"}</p>
                    </button>
                </div>
            </div>

            <div className={styles.main}>
                <div className={`${styles.title_container} ${isImgOpen ? styles.on_image_open : ""}`}>
                    <h3 className={styles.name}>{language === "en" ? "Hey, I’m" : "Bonjour, je suis"} Nacim 👋</h3>
                    <h1 className={styles.job}>Junior Fullstack Dev & DevOps</h1> 
                </div>
                <div className={styles.img_container}>
                    <div className={`${styles.img_background} ${isImgOpen ? styles.img_background_in_open : ""}`} onClick={handleImageClick}>
                        <img  className={`${isImgOpen ? styles.img_open : ""}`} 
                          src="/Me/me2.jpg" 
                          alt="Image Of Me" />
                    </div>
                    
                </div>
                <div className={`${styles.question_feilds_container} ${isImgOpen ? styles.on_image_open : ""}`}>
                    <Select/>
                    <div className={styles.question_buttons_container}>
                        {data.map((block,i) => <Block key={i} block={block}/>)}
                    </div>
                </div>
            </div>  
        </div>
    )
}