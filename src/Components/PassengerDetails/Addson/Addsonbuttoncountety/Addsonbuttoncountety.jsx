import { FaMinus, FaPlus } from 'react-icons/fa';
export default function Addsonbuttoncountety() {
  return <>
       <div className="flex w-full  me-16  items-center justify-center border text-[#003E71] border-gray-300 rounded-full overflow-hidden bg-[#003E71] p-2   shadow-sm">
        <button
          type="button"
          
          className="p-2 bg-white text-gray-600 rounded-lg hover:text-[#003E71] focus:outline-none"
        >
         <span className='w-3 h-3 flex items-center text-[#003E71]  justify-center  rounded'> <FaMinus size={16} /></span>
        </button>
        <span className="px-4 text-white text-sm">0</span>
        <button
          type="button"
          
          className="p-2 bg-white text-gray-600 rounded-lg hover:text-gray-800 focus:outline-none"
        >
         <span className='w-3 h-3 flex items-center text-[#003E71]  justify-center bg-[white] '> <FaPlus size={16}  /></span>
        </button>
      </div>
  </>
}
