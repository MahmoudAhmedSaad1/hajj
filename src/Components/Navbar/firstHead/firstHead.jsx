import React, { useState } from 'react'
export default function FirstHead() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return <>
   <div className="head text-[18px] font-semibold flex justify-between mb-5 
          items-center" >
          <div>
            <button className="bg-[#FFF5E8] text-[#003E71] py-[10px] px-[17px] rounded-[50px] flex justify-center items-center gap-2 hover:bg-[#003E71] hover:text-white transition-all duration-300"><img className="bg-white rounded-full" src="/src/assets/imgs/Icon.png" alt="icon" /> English</button>
          </div>
          <div><img className="w-[90px] h-[90px]" src="/src/assets/imgs/Logo (1).png" alt="logo" /></div>
          <div>
            <button className="bg-[#003E71] text-white  py-[10px] px-[17px] rounded-[50px] hover:bg-[#FFF5E8] hover:text-[#003E71] transition-all duration-300"><i class="fa-solid fa-user"></i> Sign in</button>
          </div>
        </div>
  </>
}
