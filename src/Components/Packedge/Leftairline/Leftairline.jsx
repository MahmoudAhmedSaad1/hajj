
export default function Leftairline({ flight }) {
  return <>
   <div className="flex items-center flex-1 min-w-[180px] gap-3">
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src={flight.airlineLogo}
              alt={flight.airlineName}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-sm">
            <div className="font-semibold text-[#26508D]">{flight.from}</div>
            <div className="text-xs text-gray-500">{flight.date}</div>
          </div>
        </div>
  </>
}
