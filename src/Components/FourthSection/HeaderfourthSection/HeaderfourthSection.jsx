import React from 'react'
import Heading from '../../Secondsection/Heading/Heading'
import Pharagraph from '../../Secondsection/Pharagraph/Pharagraph'

export default function HeaderfourthSection({heading,pharagraph}) {
  return <>
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-4 ">
        <div >
          <Heading heading={heading}/>
        </div>
       <div className='mt-5' >
         <Pharagraph pharagraph={pharagraph} />
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
