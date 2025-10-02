
import styles from './Skills.module.css'
import useLanguge from '../../Context/LanguageContext'

export default function Skills({skills}) {

    const {language} = useLanguge();

    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <h1>{language === "en" ? "Skills & Expertise" : "Skills & Expertise"}</h1>
            </div>
            { skills.map((s, i) => 
                <div key={i} className={styles.skill_feild_container}>
                    <div className={styles.feild}>
                        <span className="material-symbols-outlined">stacks</span>
                        <h1>{s.feild}</h1>
                    </div>
                    <div className={styles.skills_container}>
                        {s.skills.map((s , j) => 
                            <div key={i^j} className={styles.skill}><p>{s}</p></div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
    
}