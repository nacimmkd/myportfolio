import styles from './Answer.module.css'
import AnimatedText from '../../Components/AnimatedText/AnimatedText'

export default function Answer({answer}){
    return(
        <div className={styles.answer_container}>
            {/*<AnimatedText text={answer} speed={100}/>*/}
            <p>{answer}</p>
        </div>
    )
}