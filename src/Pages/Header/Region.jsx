import React, { useContext, useEffect } from "react";
import Select from "react-select";
import { Context } from "../../Settings";
const options = [
  {value: "Shahar tanlash", label: "Shahar tanlash"},
  { value: "Toshkent", label: "Toshkent" },
  { value: "Samarqand", label: "Samarqand" },
  { value: "Namangan", label: "Namangan" },
  { value: "Andijon", label: "Andijon" },
  { value: "Nukus", label: "Nukus" },
  { value: "Farg'ona", label: "Farg'ona" },
  { value: "Qarshi", label: "Qarshi" },
  { value: "Buxoro", label: "Buxoro" },
  { value: "Qo'qon", label: "Qo'qon" },
  { value: "Marg'lon", label: "Marg'lon" },
  { value: "Termiz", label: "Termiz" },
  { value: "Angren", label: "Angren" },
  { value: "Jizzax", label: "Jizzax" },
  { value: "Navoiy", label: "Navoiy" },
  { value: "Urganch", label: "Urganch" },
  { value: "Shahrisabz", label: "Shahrisabz" },
  { value: "Xiva", label: "Xiva" },
  { value: "Zomin", label: "Zomin" },
  { value: "Guliston", label: "Guliston" }
];  
export const Region = () => {
  const { city,setCity } = useContext(Context);
  function handleCity(event) {
    setCity(event.value)
  }
 
  const isOptionDisabled = (option) => option.value === "Shahar tanlash";
  return (
    <>
    <li className="site-header__item">
       <Select
        className="select-city"
        defaultValue={options[0]}
        options={options}
        aria-label="select-city"
        onChange={handleCity}
        isOptionDisabled={isOptionDisabled}
      />
   
    </li>
    </>  
  );
};
