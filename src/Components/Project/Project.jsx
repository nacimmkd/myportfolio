
import { useState } from 'react'
import styles from './Project.module.css'

export default function Project({project}) {

    const [isShown , setIsShown] = useState(false);

    const handleProjectClick = () => {
        setIsShown(prev => !prev)
    }

    return (
        <div onClick={handleProjectClick} className={styles.container}>
            <div className={styles.title_container}>
                <h5>{project.type}</h5>
                <h1>{project.title}</h1>
            </div>

            <div className={styles.image_container}>
                <img src={project.image} alt="" />
            </div>

            {isShown && <div className={styles.links_container}>
                {project.link_demo && <a href={project.link_demo}>Demo</a>}
                {project.link_demo && <a href={project.link_code}>Source Code</a>}
            </div>}
        </div>
    )
}