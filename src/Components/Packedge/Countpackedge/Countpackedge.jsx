import { Link } from "react-router-dom";

export default function Countpackedge() {
  return <>
  {[
        { label: "No. of Adults (+12 years)*", name: "adults" },
        { label: "No. of Children (2-12 years)*", name: "children" },
        { label: "No. of Infants (0-2 years)*", name: "infants" },
      ].map((item) => (
        <div key={item.name}>
          <label className="block text-[#1B2A41] font-medium mb-1">{item.label}</label>
          <div className="flex items-center justify-center p-1 bg-gray-50 rounded-md overflow-hidden w-full">
            <button
              
              className="w-6 h-6 rounded-lg flex items-center justify-center text-white bg-[#5879A8]"
            >
              <i class="fa-solid fa-minus"></i>
            </button>
            <span className="w-fit text-center font-semibold mx-10">0</span>
            <button
              
              className="w-6 h-6 rounded-lg  flex items-center justify-center  text-white bg-[#043379]"
            >
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      ))}
<Link to={"/passengerdetails"}>
<button className="w-full bg-[#003E71] hover:bg-[white] hover:text-[#003E71] border border-1 border-[#003E71] duration-300 text-white py-2 mt-10 rounded-full font-medium">
        Continue
      </button>
      </Link>
  </>
}
