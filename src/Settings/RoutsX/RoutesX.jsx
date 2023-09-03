import { useRoutes } from "react-router-dom"
import { Home } from "../../Pages"

export const RoutesX=()=>{
    const route =[
        {
            path:"/*",
            element:<Home/>
        },
      
        

    ]
    return useRoutes(route)
}