import { Link } from "react-router-dom";

export default function AddsonSpicialActitvitybutton({pat,title}) {
  return <>
   <Link to={pat}>
   <button className="w-1/2 mx-auto my-5 block bg-[#003E71] border border-1 border-[#003E71] duration-300 hover:bg-white hover:text-[#003E71] text-white text-center px-8 py-3 rounded-full text-base">
        {title}
      </button>
   </Link>
  </>
}
