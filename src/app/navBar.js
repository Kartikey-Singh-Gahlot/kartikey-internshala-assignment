"use client";
import {useState, useEffect} from "react";

export function NavBar({listItems}){

    const [activeTab, setActiveTab] = useState(0);
    const [bubbleStyle, setBubbleStyle] = useState({});

    useEffect(()=>{
      const activeLi = document.querySelectorAll('li');
       setBubbleStyle({width:activeLi[activeTab].offsetWidth+"px", left:activeLi[activeTab].offsetLeft+"px",  transition: "all 0.3s ease-in-out"});
    },[activeTab]);


    function trgrActive(idx){
      setActiveTab(idx);
    }

    const liItems = listItems.map((i, idx)=>{ 
        return  <li  key={idx} className={`relative z-10 w-full text-center py-[10] px-13 text-nowrap border border-[#ffffff00] rounded-[20px]  cursor-pointer transition-all duration-200 ${(activeTab==idx)?"active":""} `} onClick={(e)=>{ e.stopPropagation(); trgrActive(idx)}}>{i}</li>}
    );

    return(
     <nav className="px-2 box-border">
        <ul className=" relative flex w-fit gap-3 rounded-[20px] bg-[#171717] text-amber-50 p-1 box-border ">
            <div className={` absolute shadow-[0px_20px_80px_black]  h-[85%] rounded-[20px] top-1 left-1 bg-[#28292F]`} style={bubbleStyle} />
           {liItems} 
        </ul>
    </nav>
    );
}