import styles from './Landing.module.css'
import useLanguage from '../../Context/LanguageContext'

export default function Landing({isImgOpen , setIsImgOpen}) {

    const { language } = useLanguage();

    const handleImageClick = () => {
        setIsImgOpen(prev => !prev)
    }
    
    return(
        <div className={styles.landing_container}>
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
        </div>
    )
}