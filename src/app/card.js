export default function Card(){
    return(
        <div className=" flex bg-[#363C43] h-full rounded-[20px] shadow-[2px_3px_3px_black] px-2 py-1">
            <div className="h-full w-[24px] flex flex-col gap-[80px] py-2 shrink-0">
              <img src="/questionMark.png" className="h-[24px] w-[24px] object-contain" />
              <img src="/menuRectangle.png" className="h-[24px] w-[24px] object-contain" />
            </div>
            <div>
              <nav className="h-5 w-full">

              </nav>

              <p className="px-2 text-[#969696]">
                Hello! I’m Dave, your sales rep here from Salesforce.I’ve been working at this awesome company for 3 years now.
                I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
              </p>

            </div>

        </div>
    )
}