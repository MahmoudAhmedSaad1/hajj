
export default function Rightdestionation({flight}) {
  return <>
  <div className="flex items-center flex-1 min-w-[180px] gap-3 justify-end">
          <div className="text-sm text-right">
            <div className="font-semibold text-[#26508D]">{flight.to}</div>
            <div className="text-xs text-gray-500">{flight.date}</div>
          </div>
        </div>
  </>
}
