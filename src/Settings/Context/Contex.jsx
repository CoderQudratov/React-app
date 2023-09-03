import { createContext, useState } from "react"
export const Context = createContext()

export const ContextProvider =({children})=>{
 const [city,setCity]=useState('Toshkent')   
const [datas,setDatas]=useState([])
 const {Provider} = Context
    return(
        <Provider value={{city,setCity,datas,setDatas}}>
          {children}
        </Provider>
    )
}