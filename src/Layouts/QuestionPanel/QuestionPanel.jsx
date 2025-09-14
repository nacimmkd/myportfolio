import styles from './QuestionPanel.module.css'

import Select from '../../Components/Select/Select'
import Block from '../../Components/Block/Block';
import useLanguage from '../../Context/LanguageContext'

export default function QuestionPanel({className , setQuestion}) {

    const { data } = useLanguage();

    return(
        <div className={`${styles.question_feilds_container} ${className}`}>
            <Select setQuestion={setQuestion}/>
            <div className={styles.question_buttons_container}>
                {data.map((block,i) => <Block key={i} block={block} onClick={()=>setQuestion(block.questions[0])}/>)}
            </div>
        </div>
    )
}