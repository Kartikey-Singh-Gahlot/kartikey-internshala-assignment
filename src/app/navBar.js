"use client";

import {useState} from "react";

export function NavBar({listItems}){



    const [activeNav, setActiveNav] = useState(0);


    function trgrActive(idx){
     setActiveNav(idx);
    }

    const liItems = listItems.map((i, idx)=>{ 
        return  <li  key={idx} className={`w-full text-center py-[10] px-13 text-nowrap hover:border-[#28292F] border border-[#ffffff00] rounded-[20px] cursor-pointer transition-all duration-200 ${(activeNav==idx)?"bg-[#28292F]":""}`} onClick={()=>{ trgrActive(idx)}}>{i}</li>}
    );

    return(
     <nav className="px-2 box-border">
        <ul className="flex w-fit gap-2 rounded-[20px] bg-[#171717] text-amber-50 p-1 box-border">
           {liItems} 
        </ul>
    </nav>
    );
}