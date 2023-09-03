import { useContext } from "react";
import "./bukun.css"
import { Context } from "../../Settings";
export function Thisday({data}) {
    
const {times}=data
console.log(times);
    return(
        <>
        <ul className="thisday-list">
            <li className="thisday-item">
                <p>Tong</p>
                <p><time >{times?.tong_saharlik}</time></p>
            </li>
            <li className="thisday-item">
                <p>Quyosh</p>
                <p><time >{times?.quyosh}</time></p>
            </li>
            <li className="thisday-item">
                <p>Peshin</p>
                <p><time >{times?.peshin}</time></p>
            </li>
            <li className="thisday-item">
                <p>Asr</p>
                <p><time >{times?.asr}</time></p>
            </li>
            <li className="thisday-item">
                <p>Shom</p>
                <p><time >{times?.shom_iftor}</time></p>
            </li>
            <li className="thisday-item">
                <p>Xufton</p>
                <p><time >{times?.hufton}</time></p>
            </li>
        </ul>
        </>
    )
}