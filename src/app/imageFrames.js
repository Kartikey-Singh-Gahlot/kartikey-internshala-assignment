"use client";
import { useState, useRef } from "react";

export default function ImageFrames({images}) {

  const [leftImage, setLeftImage] = useState(0);
  const containerRef = useRef(null);



  const visibleCount = 3;
  const imgWidth = 207; 
  function trgrRight() {
    if(leftImage+visibleCount >= images.length){
     return;
    } 
    setLeftImage((prev)=>{
        return prev + 1
    });
  }  

  function trgrLeft() {
    if(leftImage<=0){
        return;
    }
    setLeftImage((prev)=>{
        return prev - 1
    });
  }


  return (
    <div className="w-full px-3 m-1">
        <nav className="relative flex w-full text-amber-50 p-1 box-border">
                  <div className="w-full">
                      <button className="bg-[#171717] px-[50px] py-[15px] rounded-[20px]  cursor-pointer font-[var(--font-poppins)]">Gallery</button>
                  </div>
                  <div className="flex justify-around w-full items-center">
                         <button className="w-fit h-fit px-[29px] py-[13.2px] text-[12px] rounded-[104px] backdrop-blur-2xl shadow-[0px_3.26px_3.26px_#FFFFFF26__inset,_0px_0px_48.91px_#FFFFFF08_inset,9px_10px_7.1px_rgba(0,0,0,0.4),_-0.5px_-0.5px_6.9px_#FFFFFF40]  bg-[#FFFFFF08] text-nowrap">
                                  + ADD Image
                         </button>
                         <div className="flex items-center  gap-2">
                              <button onClick={trgrLeft} className="rounded-full text-[14px] px-3.5 py-3.5 bg-gradient-to-b from-[#303439] to-[#161718] flex shadow-[-5px_-3px_30px_-10px_#96BEE7,_4px_5px_30px_5px_#101213] justify-center items-center box-border"><img className="" src={"/leftArrow.png"}/></button>
                              <button onClick={trgrRight} className="rounded-full text-[14px] px-3.5 py-3.5 bg-gradient-to-b from-[#303439] to-[#161718] flex shadow-[-5px_-3px_30px_-10px_#96BEE7,_4px_5px_30px_5px_#101213] justify-center items-center box-border"><img className="" src={"/rightArrow.png"}/></button>
                         </div>
                   </div>
         </nav>
         <div className="w-full overflow-x-hidden py-5 px-4 items-center">
           <div className="list w-full flex gap-4.5 transition-transform duration-300 box-border justify-around" ref={containerRef} style={{ transform: `translateX(-${leftImage * imgWidth}px)` }} >
               {images.map((i, idx) => (
                 <img
                   key={idx}
                   src={i}
                   className="imageThumbnail h-full w-auto object-contain  box-border  flex-shrink-0 rounded-[20px]"
                 />
               ))}
           </div>
         </div>
    </div>
  );
}