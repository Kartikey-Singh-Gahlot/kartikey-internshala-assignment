import {BasicCard, GalleryCard} from "./cards.js";
import {UnderLineBar} from "./underLineBar.js";
import {TextBox} from "./textBox.js";

export default function Home() {
  return (
    <main className="px-[29px] py-[80px] items-center h-fit w-full rounded-[20px] bg-gradient-to-b from-[#373E44] to-[#191B1F] box-border shadow-[10px_10px_40px_10px_#00000080] overflow-clip ">
      
      <section className="flex w-full h-full">

        <TextBox/>

        <div className="px-[57px] h-full w-full flex flex-col  box-border">

          <BasicCard/>
          <UnderLineBar/>
          <GalleryCard/>
          <UnderLineBar/>

        </div>
        
      </section>

    </main>
  );
}
