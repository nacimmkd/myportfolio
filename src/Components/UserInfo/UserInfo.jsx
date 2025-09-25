import styles from './UserInfo.module.css'
import useLanguage from '../../Context/LanguageContext'

export default function UserInfo({info}){

    const {language} = useLanguage();

    const getAge = (birthDate) => {
        const birth_year = birthDate.getFullYear();
        const this_year = new Date().getFullYear();
        console.log(birth_year)
        return this_year - birth_year;
    }

    return(
        <div className={styles.user_info_container}>
            <div className={styles.image_container}><img src={info.image} alt="" /></div>
            <div className={styles.main_container}>
                <div className={styles.name_container}><h1>{info.fullName}</h1></div>
                <div className={styles.age_address_container}>
                    <p>{`${getAge(info.dateOfBirth)} ${language === "en" ? " years old" : " ans"}`}</p>
                    <p>{info.address}</p>
                </div>
            </div>
        </div>
    )
}