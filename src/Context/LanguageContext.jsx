import { createContext, useContext, useState } from "react"
import {dataEN , dataFR} from '../Data/data'


const LanguageContext = createContext(dataEN);


export function LanguageProvider({ children }){
    const [language , setLanguage] = useState("en");
    const data = language == "en" ? dataEN : dataFR;

    const toggleLanguage = () => {
        setLanguage(prev => prev == "en" ? "fr" : "en");
    }

    return (
        <LanguageContext.Provider value = {{data , language ,  toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default function useLanguage() {
    return useContext(LanguageContext)
}

