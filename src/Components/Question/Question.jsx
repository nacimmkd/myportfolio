import styles from './Question.module.css'

export default function Question({ question , onClick }){

    return(
        <div className={styles.question_container} onClick={onClick}>
            <p>{question.text}</p>
            <img src="/icons/right_icon.svg" alt="to right icon" />
        </div> 
    )
}