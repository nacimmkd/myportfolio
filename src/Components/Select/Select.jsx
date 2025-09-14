import styles from './Select.module.css'
import { useState } from 'react'
import useLanguage from '../../Context/LanguageContext';
import Question from '../../Components/Question/Question'

export default function QuestionSelect({setQuestion}) {
  const [isOpen, setIsOpen] = useState(false);
  const {data , language} = useLanguage();


  const handleSelectOpen = () => {
    setIsOpen(prev => !prev);
  };

  

  return (
    <div className={styles.question_select_container}>
      <div className={styles.select} onClick={handleSelectOpen}>
        <p>{language === "en" ? "Ask Me" : "Posez-moi une question"}</p>
        <div className={styles.select_icon}>
          <i className="fa-solid fa-angles-up"></i>
        </div>
      </div>

      {isOpen && (
        <div  className={styles.options_screen} onClick={handleSelectOpen}>
          <div className={styles.options_container} onClick={(e) => e.stopPropagation()}>
            <div className={styles.options}>
              {data.map((block , i) => 
                <div className={styles.question_groupe_container}>
                  <div className={styles.groupe_name_container}>
                    <img src={block.icon} alt="icon" />
                    <p>{block.name}</p>
                  </div>
                  <div className={styles.questions_container}>
                    {block.questions.map((q , i) => <Question key={i} question={q} onClick={() => {setQuestion(q) ; setIsOpen(false)}}/>)}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
