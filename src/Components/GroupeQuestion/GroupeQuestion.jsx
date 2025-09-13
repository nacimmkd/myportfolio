import styles from './GroupeQuestion.module.css'
import Question from '../Question/Question'

export default function GroupeQuestion({ questionBlock }){
    return(
        <div className={styles.question_groupe_container}>
            <div className={styles.groupe_name_container}>
                <img src={questionBlock.icon} alt="icon" />
                <p>{questionBlock.name}</p>
            </div>
            <div className={styles.questions_container}>
                {questionBlock.questions.map((q , i) => 
                    <Question key={i} question={q}/>
                )}
            </div>
        </div>
    )
}