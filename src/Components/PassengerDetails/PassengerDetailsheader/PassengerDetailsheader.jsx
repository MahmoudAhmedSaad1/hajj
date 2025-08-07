
export default function PassengerDetailsheader({ activeTab }) {
  return <>
  <div className="w-full md:w-[70%] px-4">
      
      <div className="flex mb-4 space-x-2">
        <div
          className={`h-1 w-1/3 rounded ${
            activeTab === 'booking' ? 'bg-[#E8A861]' : 'bg-gray-200'
          }`}
        />

      </div>


      <div className="flex justify-between">
  
        <div className="flex flex-col">
          <span
            className="text-sm font-bold pssengerdetails  text-[#003E71] "
          
        >
            Booking Overview
          </span>
          <span className="text-xs text-gray-500">
            Please provide your name and email
          </span>
        </div>

      </div>
    </div>
  </>
}
