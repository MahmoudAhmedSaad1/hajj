import { FiArrowRight, FiMapPin } from "react-icons/fi";
import Headerhotelcard from "./headerHotelcard/headerHotelcard";
import Photohotelcard from "./PhotoHotelcard/PhotoHotelcard";
import Ldetailshotelcard from "./Ldetailshotelcard/Ldetailshotelcard";
import Rdetailshotelcard from "./Rdetailshotelcard/Rdetailshotelcard";
export default function Hotelcard() {
  return (
    <div className="px-8 py-6">
      <div className="md:w-[66%] w-full  bg-white rounded-2xl border border-gray-200 shadow p-6">
        <Headerhotelcard />
        <div className="relative bg-white rounded-xl overflow-hidden shadow-sm">
          <Photohotelcard />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 gap-1">
            <Ldetailshotelcard />

            <Rdetailshotelcard />
            <div >
              <button className=" bg-white border absolute bottom-2 right-2 border-[#003E71] text-[#26508D] rounded-full p-2 shadow  hover:bg-[#003E71] hover:text-white duration-300">
                <FiArrowRight  />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
