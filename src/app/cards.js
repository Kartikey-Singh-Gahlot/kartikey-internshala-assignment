import "./globals.css";
import {NavBar} from "./navBar.js";
import ImageFrames from "./imageFrames.js";

export function BasicCard(){
    return(
        <div className="flex bg-[#363C43]  box-border rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_#00000066] px-2 py-1">
            <div className="h-full w-[24px] flex flex-col gap-[80px] py-2 shrink-0 m-1">
              <img src="/questionMark.png" className="h-[24px] w-[24px] object-contain" />
              <img src="/menuRectangle.png" className="h-[24px] w-[24px] object-contain" />
            </div>

            <div className="w-full px-3 m-1">
             
               <NavBar listItems={["About Me", "Experiences", "Recommended"]}/>

               <div className=" flex flex-col justify-center py-5 box-border ">
                    <p className=" textPad text-[#969696] px-2 font(--font-jakarta) h-[175px]  overflow-y-scroll text-[20px] box-border text-left ">
                       Hello! I’m Dave, your sales rep here from Salesforce.I’ve been working at this awesome company for 3 years now.
                       I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a
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
        <div className="flex bg-[#363C43]  rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_#00000066] px-2 py-1">

            <div className="h-full w-[24px] flex flex-col gap-[80px] py-2 shrink-0 m-1">
              <img src="/questionMark.png" className="h-[24px] w-[24px] object-contain" />
              <img src="/menuRectangle.png" className="h-[24px] w-[24px] object-contain" />
            </div>

            
             
            <ImageFrames images={["/galleryThumbnail.png"]} />
              
        </div>
    )
}