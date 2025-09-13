import { createContext, useContext, useState } from "react"
import {dataEN , dataFR} from '../Data/data'


const LanguageContext = createContext();


export function LanguageProvider({ children }){
    const [language , setLanguage] = useState(() => {
        return localStorage.getItem("language") || "en";
    });
    const data = language == "en" ? dataEN : dataFR;

    const toggleLanguage = () => {
        setLanguage(prev => {
            if(prev === "en") {localStorage.setItem("language" , "fr" ) ; return "fr"}
            else {localStorage.setItem("language" , "en") ; return "en"}
        });
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

