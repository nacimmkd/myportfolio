import styles from './QuestionSelect.module.css'
import { useEffect, useState ,useRef } from 'react'
import useLanguage from '../../Context/LanguageContext';
import GroupeQuestion from '../GroupeQuestion/GroupeQuestion';

export default function QuestionSelect() {
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
          <i class="fa-solid fa-angles-up"></i>
        </div>
      </div>

      {isOpen && (
        <div  className={styles.options_screen} onClick={handleSelectOpen}>
          <div className={styles.options_container} 
              onClick={(e) => e.stopPropagation()}>
            <div className={styles.options}>
              {data.map((block , i) => <GroupeQuestion key={i} blocName={block.name} icon={block.icon} questionList={block.questions}/>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
