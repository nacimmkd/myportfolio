import styles from './Landing.module.css'
import useLanguage from '../../Context/LanguageContext'

export default function Landing({isImageOpen , onImageClick}) {

    const {data , language } = useLanguage();

    const handleImageClick = () => {
        onImageClick(prev => !prev)
    }
    
    return(
        <div className={styles.landing_container}>
            <div className={`${styles.title_container} ${isImageOpen ? styles.on_image_open : ""}`}>
                <h3 className={styles.name}>{data[0].greeting}</h3>
                <h1 className={styles.job}>{data[0].job}</h1> 
            </div>
            <div className={styles.img_container}>
                <div className={`${styles.img_background} ${isImageOpen ? styles.img_background_in_open : ""}`} onClick={handleImageClick}>
                    <img  className={`${isImageOpen ? styles.img_open : ""}`} 
                        src={data[0].user_photo} 
                        alt="Image Of Me" />
                </div>                    
            </div>
        </div>
    )
}