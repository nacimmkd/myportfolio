import styles from './Answer.module.css'
import AnimatedText from '../../Components/AnimatedText/AnimatedText'
import UserInfo from '../../Components/UserInfo/UserInfo'
import Contact from '../../Components/Contact/Contact'
import Cv from '../../Components/Cv/Cv'
import Skills from '../../Components/Skills/Skills'

export default function Answer({question}){
    return(
        <div className={styles.container}>
            {question.id === "M1" && <UserInfo info={question.details}/>}
            {question.id === "C1" && <Contact info={question.details}/>}
            {question.id === "S2" && <Cv cv={question.details}/>}
            {question.id === "S1" && <Skills skills={question.details}/>}
            <div className={styles.answer_container}>
                <AnimatedText text={question.answer} speed={100}/>
            </div>
        </div>
    )
}