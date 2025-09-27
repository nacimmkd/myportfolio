import styles from './Answer.module.css'
import AnimatedText from '../../Components/AnimatedText/AnimatedText'
import UserInfo from '../../Components/UserInfo/UserInfo'
import Contact from '../../Components/Contact/Contact'

export default function Answer({question}){
    return(
        <div className={styles.container}>
            {question.id === "M1" && <UserInfo info={question.details}/>}
            {question.id === "C1" && <Contact info={question.details}/>}
            <div className={styles.answer_container}>
                <AnimatedText text={question.answer} speed={100}/>
            </div>
        </div>
    )
}