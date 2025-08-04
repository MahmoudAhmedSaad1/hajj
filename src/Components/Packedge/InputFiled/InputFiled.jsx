import React from 'react'
export default function InputFiled() {
  return <>
<div className="space-y-4">
        <div>
          <label className="block text-[#185686] font-medium mb-1">Your Name*</label>
          <input
            type="text"
            placeholder="Please enter your full name"
            className="w-full border rounded-md px-3 py-2 outline-none"
          />
        </div>

        <div className="relative">
          <label className="block text-[#185686] font-medium mb-1">Phone Number*</label>
          <input
            type="text"
            placeholder="Please enter your phone no."
            className="w-full border rounded-md px-3 py-2 pr-10 outline-none"
          />
         
        </div>

        <div>
          <label className="block text-[#185686] font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Please enter your email"
            className="w-full border rounded-md px-3 py-2 outline-none"
          />
        </div>
      </div>
  </>
}
