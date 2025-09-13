import styles from './Question.module.css'

export default function Question({ question , onClick }){

    return(
        <div className={styles.question_container} onClick={onClick}>
            <p>{question.text}</p>
            <span className="material-symbols-outlined">chevron_right</span>
        </div> 
    )
}