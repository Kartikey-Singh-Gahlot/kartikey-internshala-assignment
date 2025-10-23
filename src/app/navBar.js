"use client";

export function NavBar({listItems}){
    const liItems = listItems.map((i, idx)=>{ 
        return  <li  key={idx} className="w-full text-center py-[10] px-13 text-nowrap hover:bg-[#28292F] rounded-[20px]">{i}</li>}
    );
    return(
     <nav className="px-2 box-border">
        <ul className="flex w-fit gap-2 rounded-[20px] bg-[#171717] text-amber-50 p-1 box-border">
           {liItems} 
        </ul>
    </nav>
    );
}