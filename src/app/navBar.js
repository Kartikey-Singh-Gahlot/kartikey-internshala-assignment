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
        return  <li  key={idx} className={`relative z-10 w-full text-center py-[10] px-[24px] text-nowrap border border-[#ffffff00] font-(--font-poppins) text-[18px] rounded-[20px]  cursor-pointer transition-all duration-200 ${(activeTab==idx)?"active":""} `} onClick={(e)=>{ e.stopPropagation(); trgrActive(idx)}}>{i}</li>}
    );

    return(
     <nav className="px-2 box-border">
        <ul className=" relative flex w-full gap-[10px] rounded-[20px] bg-[#171717] shadow-[inset_0px_4.96px_12.4px_2.48px_rgba(0,0,0,0.25),inset_0px_0px_37.2px_6.2px_rgba(0,0,0,0.35)] text-amber-50 py-1 px-3 box-border ">
            <div className={` absolute shadow-[5px_5px_20px_20px_#00000042,_-5px_-5px_20px_20px_#00000042]  h-[85%] rounded-[20px] top-1 left-1 bg-[#28292F]`} style={bubbleStyle} />
           {liItems} 
        </ul>
    </nav>
    );
}