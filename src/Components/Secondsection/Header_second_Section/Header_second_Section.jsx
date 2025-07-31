import React from "react";
export default function HeaderSecondSection({heading,pharagraph}) {
  return (
    <>
       <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 container  mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#003E71] px-5 ms-3 md:ms-0 pt-3 ">
         {heading}
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-md text-left  mt-4 md:mt-0 px-5 ms-3">
          {pharagraph}
        </p>
        
      </div>

    </>
  );
}
