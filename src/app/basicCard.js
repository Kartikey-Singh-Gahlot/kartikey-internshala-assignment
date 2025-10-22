export default function BasicCard(){
    return(
        <div className=" flex bg-[#363C43] h-full rounded-[20px] shadow-[2px_3px_3px_black] px-2 py-1">
            <div className="h-full w-[24px] flex flex-col gap-[80px] py-2 shrink-0">
              <img src="/questionMark.png" className="h-[24px] w-[24px] object-contain" />
              <img src="/menuRectangle.png" className="h-[24px] w-[24px] object-contain" />
            </div>
            <div>
             <nav className=" w-full px-2 box-border">
                    <ul className="flex gap-6  rounded-[20px] bg-black text-amber-50 px-2 ">
                        <li className="px-[24] py-[10]">About Me</li>
                        <li className="px-[24] py-[10]">Experiences</li>
                        <li className="px-[24] py-[10]">Recommended</li>
                    </ul>
              </nav>

             <div className=" flex flex-col justify-center py-5 box-border">
                  <p className=" text-[#969696] px-2">
                     Hello! I’m Dave, your sales rep here from Salesforce.I’ve been working at this awesome company for 3 years now.
                     I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a
                  </p>
              </div>

            </div>

        </div>
    )
}