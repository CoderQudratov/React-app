import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import './Home.css'
import { useContext, useEffect, useState } from "react";
import { Context, HookAPI } from "../../Settings";
import { ChoseBtns } from "./ChoseBtn";
import { Header } from "../Header";
import { Thisday } from "../Thisday/Thisday";
import { Table } from "./Table";
// let location =useLocation()
// console.log(location);
export function Home() {
  const location =useLocation()
  
  const [url,setUrl] =useState('')
  const [vaqt,setvaqt]=useState('')
  const {city} =useContext(Context)
  const [namozvaqti,setNamozVaqti]=useState('')
  const {data,loading,error}=HookAPI(url,city)
  console.log(data);
  // const {datas,setDatas}=useContext(Context)  
  // useEffect(()=>{
  //  setDatas(data)
 useEffect(()=>{
 if (location.pathname=='/') {
  location.pathname='/bugun'
 }
 },[location.pathname])
  return (
    <>
     <main >
      <section className="site-hero">
        <div className="container">
          <div className="site-hero__inner">
            <div className="site-hero__card card-hero">
              <h1 className="card-hero__title">{data.region} Namoz vaqti</h1>
              <p className="card-hero__time">
                <time className="time" >
                {data.date} Safar 1445
                </time>
              </p>
             <ChoseBtns url={url} setUrl={setUrl}/>
             <Routes>
      
      <Route path="/bugun" index element={<Thisday data={data}/>}/>
    </Routes>
            
             
            </div>
            
          </div>
          <Routes>
             <Route path="oylik/oy/shahar" element={<Table data={data}/>}/> 
            </Routes>
        </div>
      </section>
    
    </main>
   
    </>
   
  );
}
