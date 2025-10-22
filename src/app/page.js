import BasicCard from "./basicCard.js";
import GalleryCard from "./galleryCard.js";

export default function Home() {
  return (
    <main className="px-[29px] py-[96px] items-center h-screen w-full rounded-[20px] bg-gradient-to-b from-[#373E44] to-[#191B1F] box-border shadow-[10px_10px_40px_#000000] overflow-clip">
      
      <section className=" flex w-full h-full">

        <div className="h-full w-full bg-[#575858] border border-[#96BEE7] box-border rounded-[20px]">

        </div>

        <div className="px-[57px] h-full w-full flex flex-col  box-border">

          <BasicCard/>

          <div className=" flex justify-center py-[17px] px-[54px]">
            <hr className="border-[3px] w-full rounded-[3px] border-[#353B41] drop-shadow-[0px_2px_1px_black]" />
          </div>

          <GalleryCard/>

          <div className=" flex justify-center pt-[17px] px-[54px]">
            <hr className="border-[3px] w-full rounded-[3px]  border-[#353B41] drop-shadow-[0px_2px_1px_black]" />
          </div>

        </div>
      </section>
    </main>
  );
}
