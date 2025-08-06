import { FaCar } from "react-icons/fa";import TransportationPackedgeDot from "../TransportationPackedgeDot/TransportationPackedgeDot";
import TransportationPackedgeTitle from "../TransportationPackedgeTitle/TransportationPackedgeTitle";
import TransportationPackedgedashedline from "../TransportationPackedgedashedline/TransportationPackedgedashedline";
import TransportationPackedgeicon from "../TransportationPackedgeicon/TransportationPackedgeicon";
export default function TransportationPackedgeTwoicon() {
  return (
    <div>
      <hr className="mt-6 border-t border-gray-200" />
      <div className="md:w-[70%] mt-5">
        <TransportationPackedgeTitle title={"Makkah-Madinah "} />
        <div className="flex flex-col ps-10 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-gray-600 text-sm">Hotel</span>

          <div className="relative flex-1 flex items-center mx-4 overflow-x-auto">
            <TransportationPackedgedashedline />

            <div className="relative flex items-center justify-between w-full z-10">
              <TransportationPackedgeDot />

              <TransportationPackedgeicon />

              <TransportationPackedgeDot />

              <TransportationPackedgeicon />

              <TransportationPackedgeDot />
            </div>
          </div>

          <span className="text-gray-600 text-sm text-right">Makkah City</span>
        </div>
      </div>
    </div>
  );
}
