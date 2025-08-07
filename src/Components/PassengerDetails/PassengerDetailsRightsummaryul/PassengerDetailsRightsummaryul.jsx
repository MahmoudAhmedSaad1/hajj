import {
  FaChair,
  FaHotel,
  FaCalendarAlt,
  FaUser,
} from 'react-icons/fa';
import { BiSolidPlaneAlt } from "react-icons/bi";



export default function PassengerDetailsRightsummaryul({adults,children}) {
  return <>

  <ul className="mt-4 space-y-3">
          <li className="flex items-start space-x-2">
            <BiSolidPlaneAlt className="mt-1 text-gray-400" />
            <div className="flex flex-col">
              <span className="text-[#8E8F92] text-sm">Departure from</span>
              <span className="text-[#185686] font-medium">Cairo International Airport (CAI)</span>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <FaChair className="mt-1 text-[#8E8F92]" />
            <div className="flex flex-col">
              <span className="text-[#8E8F92] text-sm">Cabin Class</span>
              <span className="text-[#185686] font-medium">Economy</span>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <FaHotel className="mt-1 text-[#8E8F92]" />
            <div className="flex flex-col">
              <span className="text-[#8E8F92] text-sm">Number of nights</span>
              <span className="text-[#185686] font-medium">5 nights, 6 days</span>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <FaHotel className="mt-1 text-[#8E8F92]" />
            <div className="flex flex-col">
              <span className="text-[#8E8F92] text-sm">Hotels</span>
              <span className="text-[#185686] font-medium">El taqwa Hotel, El haramen Hotel</span>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <FaCalendarAlt className="mt-1 text-[#8E8F92]" />
            <div className="flex flex-col">
              <span className="text-[#8E8F92] text-sm">Start Date</span>
              <span className="text-[#185686] font-medium">03 August, 2025</span>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <FaCalendarAlt className="mt-1 text-[#8E8F92]" />
            <div className="flex flex-col">
              <span className="text-gray-400 text-sm">End Date</span>
              <span className="text-[#185686] font-medium">28 August, 2025</span>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <FaUser className="mt-1 text-gray-400" />
            <div className="flex flex-col">
              <span className="text-gray-400 text-sm">Guest</span>
              <span className="text-[#185686] font-medium">{adults} Adults, {children} Children</span>
            </div>
          </li>
        </ul>
  </>
}
