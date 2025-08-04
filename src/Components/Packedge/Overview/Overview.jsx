import React, { useState } from "react";

const tabs = ["Overview", "Flights", "Hotels", "Transportations", "FAQS"];

export default function Overview() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex my-10   ">
      <div className="relative bg-[#f8efe2] w-full md:w-[66%] rounded-full flex  px-3 py-2 md:px-6 md:py-3 shadow-sm ">
        {tabs.map((id, act) => (
          <button
            key={id}
            onClick={() => setActive(act)}
            className={`relative flex-1 text-xs md:text-sm font-medium transition-colors focus:outline-none ${
              active === act ? "text-[#88632B]" : "text-gray-500"
            }`}
            aria-current={active === act ? "page" : undefined}
          >
            <div className="py-1 px-2 flex justify-center">
              {id}
            </div>
            {active === act && (
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1/2 h-[2px] rounded-full bg-[#C4A078]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
