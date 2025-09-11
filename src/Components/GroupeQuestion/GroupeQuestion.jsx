import styles from './GroupeQuestion.module.css'

export default function GroupeQuestion({blocName , icon , questionList }){
    return(
        <div className={styles.question_groupe_container}>
            <div className={styles.groupe_name_container}>
                <img src={icon} alt="" />
                <p>{blocName}</p>
            </div>
            <div className={styles.questions_container}>
                {questionList.map(q => 
                    <div className={styles.question_container}>
                        <p>{q.question}</p>
                        <span class="material-symbols-outlined">chevron_right</span>
                    </div>
                )}
            </div>
        </div>
    )
}