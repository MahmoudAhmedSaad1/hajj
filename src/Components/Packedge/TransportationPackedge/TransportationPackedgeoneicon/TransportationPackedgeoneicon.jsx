import TransportationPackedgeDot from "../TransportationPackedgeDot/TransportationPackedgeDot";
import TransportationPackedgeTitle from "../TransportationPackedgeTitle/TransportationPackedgeTitle";
import TransportationPackedgedashedline from "../TransportationPackedgedashedline/TransportationPackedgedashedline";
import TransportationPackedgeiconbus from "../TransportationPackedgeiconbus/TransportationPackedgeiconbus";

export default function TransportationPackedgeoneicon() {
  return (
    <>
      <TransportationPackedgeTitle title={"Makkah-Madinah Transportation"} />
      <div className="flex flex-col md:w-[70%] ps-10 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-gray-600 text-sm ">Hotel</span>
        <div className="relative flex-1 flex items-center mx-4 overflow-x-auto">
          <TransportationPackedgedashedline />
          <div className="relative flex items-center justify-between w-full z-10 ">
            <TransportationPackedgeDot />
            <TransportationPackedgeiconbus />
            <TransportationPackedgeDot />
          </div>
        </div>
        <span className="text-gray-600 text-sm text-right">Makkah City</span>
      </div>
    </>
  );
}
