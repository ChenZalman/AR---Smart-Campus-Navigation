import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
//require('dotenv').config()

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const address = import.meta.env.VITE_ADDRESS;
    const signup = async (email,password,name,phoneNumber) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`http://${address}:4000/API/USERS/signup`,//'https://ar-tourapp-gac5fnceasb7ghh5.israelcentral-01.azurewebsites.net/api/users/signup',
            {method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"email":email, "password": password, "full_name":name, "phone_number":phoneNumber, "admin":1})})

            const json = await response.json()

            if(!response.ok){
                setIsLoading(false)
                setError(json.error)
            }
            if(response.ok){
                //save the user to local storage
                localStorage.setItem("user", JSON.stringify(json))

                //update Authcontact
                dispatch({type: 'LOGIN', payload: json})

                setIsLoading(false)
            }
    } 
    return {signup,isLoading,error}
}