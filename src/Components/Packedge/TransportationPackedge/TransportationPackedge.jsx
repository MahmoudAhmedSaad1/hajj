import TransportationPackedgeTwoicon from "./TransportationPackedgeTwoicon/TransportationPackedgeTwoicon";
import TransportationPackedgeoneicon from "./TransportationPackedgeoneicon/TransportationPackedgeoneicon";
import TransportationPackedgehead from "./TransportationPackedgehead/TransportationPackedgehead";
export default function TransportationPackedge() {
  return (
    <div className="p-5 ">
      <div className="bg-white   p-6 md:p-8 rounded-[30px] shadow w-full md:w-[66%] ">
        <TransportationPackedgehead />
        <div>
          <TransportationPackedgeoneicon />
          <TransportationPackedgeTwoicon />
        </div>
      </div>
    </div>
  );
}
