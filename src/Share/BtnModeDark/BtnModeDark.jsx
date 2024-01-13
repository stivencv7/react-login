import React from 'react'
import { useEffect, useState } from 'react'
import { IoMoon } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import { GiMoon } from "react-icons/gi";
import { BsMoonStarsFill } from "react-icons/bs";
import { WiMoonAltNew } from "react-icons/wi";

export const BtnModeDark = ({className}) => {
    const [theme,setTheme]=useState(()=>{
        if(window.matchMedia('(prefers-color-scheme:dark)').matches){
        return "dark"
        }
        return "light"
      });
    
      const handleChangeTeme=()=>{
        setTheme(prevTheme=>prevTheme=="light" ? "dark" : "light");
      }
    
      useEffect(()=>{
    
        if(theme=="dark"){
          document.querySelector('html').classList.add('dark');
        }else{
          document.querySelector('html').classList.remove('dark');
        }
    
    },[theme])
    
  return (
    <div bg-transparent>
        
        <button className={className} onClick={handleChangeTeme}>{theme=='dark'?<MdWbSunny/>:<WiMoonAltNew/>}</button>
      
    </div>
  )
}
