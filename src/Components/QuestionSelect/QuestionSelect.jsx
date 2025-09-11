import { useState } from 'react'
import styles from './QuestionSelect.module.css'

export default function QuestionSelect() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={styles.question_select_container}>
      <div className={styles.select} onClick={handleSelectOpen}>
        <p>Ask Me...</p>
        <div className={styles.select_icon}>
          <i
            className="fa-solid fa-arrow-right"
            style={{
              transform: isOpen ? 'rotate(90deg)' : 'rotate(-90deg)',
            }}
          ></i>
        </div>
      </div>

      {isOpen && (
        <div
          className={styles.options_screen}
          onClick={handleSelectOpen} 
        >
          <div
            className={styles.options_container}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.options}>
              <div className={styles.options_groupe}>
                <p className={styles.groupe_name}>Me</p>
                <div className={styles.option}>
                  <div className={styles.question}>
                    <p>What is your</p>
                  </div>
                  <div className={styles.question}>
                    <p>How Old are u</p>
                  </div>
                </div>
              </div>

              <div className={styles.options_groupe}>
                <p className={styles.groupe_name}>Projects</p>
                <div className={styles.option}>
                  <div className={styles.question}>
                    <p>What are your projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
