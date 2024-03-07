import React, {createContext, useContext, useState} from "react";
import { BASE_TEST } from "./config";

const AppContext = createContext();


const AppProvider = ({ children }) => {
    const [wronguop, setwronguop] = useState(false)
    const [unknown, setunknown] = useState(false)
    const [authenticated, setauthenticated] = useState('Nan')
    const [loggin, setloggin] = useState(false)

    const login = async (username, password) => {
        setloggin(true)
        console.log('Username: ', username)
        console.log('Password; ', password)
        const formdata = new FormData()
        formdata.append('username', username)
        formdata.append('password', password)
        const response = await fetch(`${BASE_TEST}/login`, {
            method: 'POST',
            body: formdata
        })
        if (!response.ok){
            return
        }
        const resp2 = await response.json()
        if (resp2.status === 200){
            setloggin(false)
            setauthenticated('true')
            console.log('Login Success')
        }
        else if (resp2.status === 404){
            setwronguop(true)
            setloggin(false)
            console.log("Wrong")
        }
        else{
            console.log('Resp2: ', resp2)
            setunknown(true)
            setloggin(false)
            console.log('Unkown')
        }
    }

    const signup = (username, password) => {
        console.log(username, password)
    }
    return(
        <AppContext.Provider value={{ login, signup, wronguop, authenticated, loggin }}>
            {children}
        </AppContext.Provider>
    );

}

export {AppContext, AppProvider}