import React from 'react'

export default function HeaderfourthSection() {
  return <>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 container  mx-auto px-4">
        <div>
          <h2 className="text-3xl font-bold text-[#003E71] px-5 ms-3 md:ms-0 pt-3 ">
        Explore our best list <br/>
5 - stars hotel.
        </h2>
        </div>
       <div className='mt-5' >
         <p className="text-gray-500 text-sm md:text-base max-w-md text-left  mt-7 md:mt-0 px-5 ms-3">
          We understand that every traveler has different preferences. that’s why our platform’s good.
        </p>
         <div className="w-full max-w-md mx-auto">
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mt-4 shadow-sm">
        <input
          type="text"
          placeholder="Find hotel"
          className="bg-transparent outline-none flex-grow text-gray-700 placeholder-gray-400 text-sm"
        />
        <i class="fa-solid fa-magnifying-glass  text-gray-400"></i>
              </div>
    </div>
       </div>
        
      </div>
  </>
}
