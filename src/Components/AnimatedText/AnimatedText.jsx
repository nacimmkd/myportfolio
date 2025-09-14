import styles from './AnimatedText.module.css'
import { useEffect, useState } from "react";

export default function AnimatedText({text , speed = 50}) {

    const [displayedText , setDisplayedText] = useState("");
    const words = text.split(" ");
    const [index , setIndex] = useState(0);


    useEffect(()=>{
        setDisplayedText("");
        setIndex(0);
        
        const intervalId = setInterval(()=>{
            if(index < words.length) {
                setDisplayedText(prev => prev + " " + words[index])
                setIndex(prev => prev + 1)
            }else {
                clearInterval(intervalId)
            }
        },speed)
        return () => clearInterval(intervalId)
    },[words , speed , text])

    return(
        <div className={styles.text_container}>
            <p>{displayedText}</p>
        </div>
    )
}