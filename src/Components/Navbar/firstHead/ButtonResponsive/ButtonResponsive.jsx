import React, { useState } from 'react'

export default function ButtonResponsive() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return <>
   <div className="p-4 md:hidden absolute z-50">
            <button onClick={toggleMenu} className="text-amber-700">
              <i className="fa-solid fa-bars w-6 h-6 text-gray-700 hover:text-[#003E71] transition duration-200"></i>
            </button>
          </div>
  </>
}
