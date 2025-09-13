import styles from './Block.module.css'

export default function Block({ block , onClick}){
    return(
        <div onClick={onClick} className={styles.button_container}>
            <img src={block.icon} alt="icon" />
            <p>{block.name}</p>
        </div>
    )
}

