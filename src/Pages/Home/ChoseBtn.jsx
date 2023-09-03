import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom"

export const ChoseBtns=({url,setUrl})=>{
    const location =useLocation()
    console.log(location);
    useEffect(()=>{
        switch (location.pathname) {
            case '/bugun':
                setUrl('https://islomapi.uz/api/present/day?')
                break;
            case '/oylik/oy/shahar':
                setUrl('https://islomapi.uz/api/monthly?')
            default:
                break;
        }
    },[location.pathname])
    return(
        <div className="card-hero__chose-time">
        <NavLink exact   id="bugun" className='chose-btn' to="/bugun">bugun</NavLink>
        <NavLink  id="oy" className='chose-btn'  to={`oylik/${"oy"}/${"shahar"}`}>Oylik</NavLink>
        <NavLink  id="yil" className='chose-btn'  to={`oylik/${"oy"}/${"shahars"}`}>Yillik</NavLink>
      </div>
    )
}