import { FaMinus } from "react-icons/fa";
export default function PassengerDetailsLeftFormcountersminus({decrease,setter,value}) {
  return <>
  <button
                      type="button"
                      onClick={() => decrease(setter, value)}
                      className="w-6 h-6 flex items-center text-white  justify-center bg-[#7D97BA] rounded"
                    >
                      <FaMinus />
  
                    </button>
  </>
}
