import axios from "axios"
import { useEffect, useState } from "react"

export const HookAPI=(url,city)=>{
   const [data,setData]=useState([])
   const [loading,setLoading]=useState(true)
   const [error,setError]=useState(null)
   let date =new Date().getMonth()
   useEffect(()=>{
    async function axiosData(url,city) {

        try {
         
            const getData =await axios.get(url,{
                params:{
                    'region':city,
                    'month':date
                }
            })
            const response =await getData.data
            setData(response)
            setLoading(false)
            setError(null)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }
    axiosData(url,city)
   },[url,city])
   return {data,loading,error}
}