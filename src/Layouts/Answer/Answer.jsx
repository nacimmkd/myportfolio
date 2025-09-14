import styles from './Answer.module.css'
import AnimatedText from '../../Components/AnimatedText/AnimatedText'

export default function Answer(){
    return(
        <div className={styles.answer_container}>
            <AnimatedText text={"I'm a full-stack developer, YouTuber, and student passionateabout building products that matter. I love creating content and sharing my knowledge in tech, especially around topics like React, Node.js, and the latest trends in the industry. If you're curious about anything specific, feel free to ask! What interests you the most about tech?"}/>
        </div>
    )
}