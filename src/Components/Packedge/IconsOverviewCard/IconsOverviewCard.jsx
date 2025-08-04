import React from 'react'
import {
  FaPlane,
  FaHotel,
  FaUserTie,
} from "react-icons/fa";
import { GiBus } from "react-icons/gi";
import { AiOutlineQrcode } from "react-icons/ai";
export default function IconsOverviewCard() {
  return <>
  <div className="flex flex-wrap justify-between gap-6 text-xs md:text-sm text-[#26508D] mb-2">
          <div className="flex flex-col items-center ">
            <div className="p-2 rounded-full bg-[#FFF8F2] mb-1">
              <FaPlane className="text-[#B68D60] text-lg" />
            </div>
            <div className="font-semibold whitespace-nowrap my-2">Flight airlines</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-2 rounded-full bg-[#FFF8F2] mb-1">
              <GiBus className="text-[#B68D60] text-lg" />
            </div>
            <div className="font-semibold whitespace-nowrap my-2">1 Transportation</div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="p-2 rounded-full bg-[#FFF8F2] mb-1">
              <FaHotel className="text-[#B68D60] text-lg" />
            </div>
            <div className="font-semibold whitespace-nowrap my-2">2 Hotels</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-2 rounded-full bg-[#FFF8F2] mb-1">
              <FaUserTie className="text-[#B68D60] text-lg" />
            </div>
            <div className="font-semibold whitespace-nowrap my-2">Tour Guide</div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="p-2 rounded-full bg-[#FFF8F2] mb-1">
              <AiOutlineQrcode className="text-[#B68D60] text-lg" />
            </div>
            <div className="font-semibold text-center whitespace-nowrap my-2">
              Ministry of Tourism QR 
            </div>
          </div>
        </div>
  </>
}
