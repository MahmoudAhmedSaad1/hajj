import {
  FaPlane,

} from "react-icons/fa";
export default function Middletimeline({flight}) {
  return <>
  <div className="flex flex-1 items-center justify-center relative">
            <div className="hidden md:flex items-center gap-2 w-full max-w-xs">
              <div className="flex flex-col items-center text-xs">
                <div>{flight.departTime}</div>
              </div>
              <div className="flex-1 flex items-center relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-[2px] bg-gray-200"></div>
                </div>
                <div className="relative flex justify-center w-full">
                  <div className="bg-[#f0e5d7] p-2 rounded-full">
                    <FaPlane className="text-orange-300" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center text-xs">
                <div>{flight.arriveTime}</div>
              </div>
            </div>
            {/* Mobile simplified */}
            <div className="md:hidden flex items-center gap-2 text-xs">
              <div className="flex flex-col items-center">
                <div>{flight.departTime}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#f0e5d7] p-2 rounded-full">
                  <FaPlane className="text-orange-300" />
                </div>
                <div className="flex flex-col">
                  <div>{flight.arriveTime}</div>
                </div>
              </div>
            </div>
          </div>
  </>
}
