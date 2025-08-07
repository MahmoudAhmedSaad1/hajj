import { FaArrowRight, FaSort } from 'react-icons/fa';
export default function Addsonbuttonsize() {
  return <>
          <div className="relative me-16 w-full ">
  <select className="w-full  border-2  border-[#003E71] rounded-full  py-2 ps-[40%]  text-[#003E71] text-sm appearance-none pr-8 bg-white">
    <option>Size: XL</option>
    <option>Size: L</option>
    <option>Size: M</option>
  </select>
  <FaSort className="pointer-events-none absolute h-5 w-5   right-[40%] top-1/2 transform -translate-y-1/2 text-[#8E8F92]" />
</div>

  </>
}
