import styles from './Answer.module.css'
import AnimatedText from '../../Components/AnimatedText/AnimatedText'
import UserInfo from '../../Components/UserInfo/UserInfo'

export default function Answer({question}){
    return(
        <div className={styles.container}>
            {question.id === "M1" && <UserInfo/>}
            <div className={styles.answer_container}>
                <AnimatedText text={question.answer} speed={100}/>
            </div>
        </div>
    )
}