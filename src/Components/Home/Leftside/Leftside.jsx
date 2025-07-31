import React from 'react'
import Rightside from '../rightSide/Rightside'

export default function Leftside() {
  return <>
 <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full  bg-[#19283477] flex items-center justify-between text-white  ">
          <div className=" flex items-center justify-between  relative">
           <div className="ps-[50px]   w-[60%]" >
         <h1 className="font-600 text-[45px]">
          We help you organize every step of your Hajj and Umrah pilgrimage.
        </h1>
        <p className="font-600 text-[22px] my-7 ">Begin your sacred journey to Makkah and Madinah.</p>
        <button className="uppercase gap-8 bg-[#8F6A42] px-[50px] py-[10px] rounded-[10px] hover:text-[#8F6A42] hover:bg-white duration-300 border border-[#8F6A42] hover:border-[white] ">BOOK now </button>
       </div>
      
          </div>
        </div>
  
  </>
}
