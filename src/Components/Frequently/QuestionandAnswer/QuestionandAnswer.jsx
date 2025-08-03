"use client";
import { useState } from "react";
export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full border-b border-gray-200 py-4">
      <button
        className="w-full flex items-start justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm sm:text-base font-semibold text-[#003E71]">
          {question}
        </span>
        <span className="ml-4 mt-1 text-gray-400 shrink-0">
          <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center">
            {isOpen ? (
              <i class="fa-solid fa-minus"></i>
            ) : (
              <i class="fa-solid fa-plus"></i>
            )}
          </div>
        </span>
      </button>

      {isOpen && (
        <p className="mt-2 text-sm text-gray-600  font-semibold text-[16px] w-[95%]">
          {answer}
        </p>
      )}
    </div>
  );
}
