

export default function Home() {
  return (
    <main className="px-[29px] py-[96px] items-center h-screen w-full rounded-[20px] bg-gradient-to-b from-[#373E44] to-[#191B1F] box-border shadow-[10px_10px_40px_#000000] overflow-clip">
      
      <section className=" flex w-full h-full">

        <div className="h-full w-full bg-[#575858] border border-[#96BEE7] box-border rounded-[20px]"></div>
        <div className="px-[57px] h-full w-full flex flex-col  box-border">

          <div className=" flex bg-[#363C43] h-full rounded-[20px] shadow-[2px_3px_3px_black] px-2 py-2">
            <div className="h-full w-[24px] flex flex-col gap-[80px] py-2 shrink-0">
                 <img src="/questionMark.png" className="h-[24px] w-[24px] object-contain" />
                 <img src="/menuRectangle.png" className="h-[24px] w-[24px] object-contain" />
            </div>

            <div className="h-full flex flex-col">
              <nav className=" w-full px-2 box-border">
                    <ul className="flex bg-black gap-6 text-amber-50 rounded-[20px] px-2">
                        <li className="px-4 py-2">About Me</li>
                        <li className="px-4 py-2">Experiences</li>
                        <li className="px-4 py-2">Recommended</li>
                    </ul>
              </nav>

              <p className="px-3 py-3 text-[#969696]">
                  Hello! I’m Dave, your sales rep here from Salesforce.I’ve been working at this awesome company for 3 years now.
                  I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
              </p>

            </div>

          </div>

          <div className=" flex justify-center py-[17px] px-[54px]">
            <hr className="border-[3px] w-full rounded-[3px] border-[#353B41] drop-shadow-[0px_2px_1px_black]" />
          </div>

          <div className="flex bg-[#363C43] h-full rounded-[20px] shadow-[2px_3px_3px_black] px-2 py-2">
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

              <p className="px-3 py-3 text-[#969696]">
                Hello! I’m Dave, your sales rep here from Salesforce.I’ve been working at this awesome company for 3 years now.
                I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
              </p>

            </div>

          </div>

          <div className=" flex justify-center pt-[17px] px-[54px]">
            <hr className="border-[3px] w-full rounded-[3px]  border-[#353B41] drop-shadow-[0px_2px_1px_black]" />
          </div>

        </div>
      </section>
    </main>
  );
}
