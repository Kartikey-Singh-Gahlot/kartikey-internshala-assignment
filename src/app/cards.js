import "./globals.css";
import {NavBar} from "./navBar.js";

export function BasicCard(){
    return(
        <div className=" flex bg-[#363C43] h-full rounded-[20px] shadow-[2px_3px_3px_black] px-2 py-3">
            <div className="h-full w-[24px] flex flex-col gap-[80px] py-2 shrink-0">
              <img src="/questionMark.png" className="h-[24px] w-[24px] object-contain" />
              <img src="/menuRectangle.png" className="h-[24px] w-[24px] object-contain" />
            </div>
            <div>
             
            <NavBar listItems={["About Me", "Experiences", "Recommended"]}/>

             <div className=" flex flex-col justify-center py-5 box-border">
                  <p className=" text-[#969696] px-2 h-[130px] overflow-y-scroll ">
                     Hello! I’m Dave, your sales rep here from Salesforce.I’ve been working at this awesome company for 3 years now.
                     I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a
                     I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a
                  </p>
              </div>

            </div>

        </div>
    )
}

export function GalleryCard(){
    return(
        <div className="flex bg-[#363C43] h-full rounded-[20px] shadow-[2px_3px_3px_black] px-2 py-3">
            <div className="h-full w-[24px] flex flex-col gap-[80px] py-2 shrink-0">
              <img src="/questionMark.png" className="h-[24px] w-[24px] object-contain" />
              <img src="/menuRectangle.png" className="h-[24px] w-[24px] object-contain" />
            </div>

            <div>
            
              <nav className="relative flex w-fit gap-3 rounded-[20px] bg-[#171717] text-amber-50 p-1 box-border">
                  <button className="relative z-10 w-full text-center py-[10] px-12 text-nowrap border border-[#ffffff00] rounded-[20px]  cursor-pointer">Gallery</button>
              </nav>
             
              <div className="w-full  gap-2 flex justify-evenly py-5 px-2">
                   <div className="h-20 w-20 bg-amber-400"/> 
                   <div className="h-20 w-20 bg-amber-400"/> 
                   <div className="h-20 w-20 bg-amber-400"/>
                   <div className="h-20 w-20 bg-amber-400"/>
              </div>
            </div>
        </div>
    )
}