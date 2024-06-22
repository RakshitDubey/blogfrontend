import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { url } from "../url";

export const UserContext=createContext({})
export function UserContextProvider({children}){
    const[user,setuser]=useState(null)
    const getuser=async(req,res)=>{
        try {
            const res=await axios.get(url+'/api/auth/refetch',{withCredentials:true})
            setuser(res.data)
            // console.log(res.data);
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getuser()
    },[])
    return(
    <UserContext.Provider value={{user,setuser}}>
        {children}

    </UserContext.Provider>
    )
}