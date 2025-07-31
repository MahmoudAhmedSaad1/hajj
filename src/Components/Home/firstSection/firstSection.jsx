import React from 'react'
import Rightside from '../rightSide/Rightside'
import Leftside from '../Leftside/Leftside'

export default function FirstSection() {
  return <>
  

  <div className="background_img bg-cover bg-center h-[100vh] w-full overflow-hidden py-1 relative">
         <Rightside/>
  <Leftside/>
      </div>
  </>
}
