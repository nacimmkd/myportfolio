import styles from './QuestionButton.module.css'

export default function QuestionButton({text , icon , onClick}){
    return(
        <div onClick={onClick} className={styles.button_container}>
            <img src={icon} alt="icon" />
            <p>{text}</p>
        </div>
    )
}

