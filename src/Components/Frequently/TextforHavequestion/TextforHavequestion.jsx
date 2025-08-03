import React from 'react'
export default function TextforHavequestion({heading, paragraph}) {
  return <>
  <h3 className="text-lg sm:text-xl font-semibold text-[#003E71]">
        {heading}
      </h3>
      <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
{paragraph}
      </p>
  </>
}
