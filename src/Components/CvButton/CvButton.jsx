import styles from './CvButton.module.css'

export default function CvButton() {
    return(
        <div className={styles.cv_btn_container}>
            <a href="lien de cv" target="_blank" rel="noopener noreferrer">
                <p className={styles.cv_compete_name}>Curriculum Vitae</p>
                <p>CV</p>
            </a>
        </div>
    )
}
