import styles from './Gallery.module.css'

export default function Gallery({children}) {

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}