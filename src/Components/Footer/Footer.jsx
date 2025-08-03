import React from "react";
import Logoforfooter from "./Logoforfooter/Logoforfooter";
import LinksFooter from "./LinksFooter/LinksFooter";
import Socialfooter from "./Socialfooter/Socialfooter";
import CopyRight from "./CopyRight/CopyRight";



export default function Footer (){
  return (
    <footer className="bg-[#003366] text-white rounded-t-3xl px-6 pt-10 pb-4">
      <div className="container mx-auto flex flex-col items-center gap-6 text-center">
       <Logoforfooter/>

      
      <LinksFooter/>

      
        <Socialfooter/>

        
        <div className="h-px w-full bg-white/20 mt-4" />

        
        <CopyRight/>
      </div>
    </footer>
  );
};

