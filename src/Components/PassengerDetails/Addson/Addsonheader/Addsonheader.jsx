import { FaArrowRight} from "react-icons/fa";
export default function Addsonheader() {
  return <>
   <div className="flex justify-between  items-center mb-4">
            <h2 className="text-lg font-bold text-[#003E71]">
              Some Essentials you need
            </h2>
            <button className="flex items-center text-sm text-gray-500 hover:text-[#003E71] duration-300">
              See All <FaArrowRight className="ml-1" />
            </button>
          </div>
  </>
}
