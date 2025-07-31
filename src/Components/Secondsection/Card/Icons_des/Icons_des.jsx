import React from 'react'

export default function Icons_Des() {
  return <>
    <div className="flex items-center gap-4 text-sm  mb-3">
          <div className="flex items-center gap-1 ">
            {/* <span  >✈️</span> Flight */}
            <i class="fa-solid fa-plane-circle-check text-[#B68D60] "></i><span className='text-[#185686]'>Flight</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🚐</span> <span className='text-[#185686]'>Transfers</span>
          </div>
          <div className="flex items-center gap-1">
            <span >🏨</span> <span className='text-[#185686]'>Hotels</span>
          </div>
        </div>
  </>
}
