import { Link } from "react-router-dom";

export default function PassengerDetailsLeftFormcountersbutton({ title }) {
  return (
    <>
      <div>
       <Link to="/addson">
        <button
          type="submit"
          className="mb-6  w-full bg-[#003E71] duration-300 hover:bg-white  hover:text-[#003E71] border border-[#003E71] border-2  text-white py-3 rounded-full font-medium"
        >
          {title}
        </button>
       </Link>
      </div>
    </>
  );
}
