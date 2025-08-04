
import { FiArrowRight, FiMapPin } from "react-icons/fi";
export default function Ldetailshotelcard() {
  return <>
  <div className="w-fit">
              <div className="text-sm text-[#1f3f6f] font-semibold mb-1">
                Al - Haram Al - Makky Hotel for guests - 5 stars Hotel
              </div>
              <div className="flex flex-col gap-2 text-xs text-gray-600 mt-1">
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-gray-400" />
                  <span className="truncate">Ibrahem el khalil Rd, Ash Shubaikah, Jabal omar</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-gray-400" />
                  <span>1.5 kilo from Haram</span>
                </div>
              </div>
            </div>
  </>
}
