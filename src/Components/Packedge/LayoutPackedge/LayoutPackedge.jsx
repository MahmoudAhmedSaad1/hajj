import Headerpackedge from "../headerpackedge/headerpackedge";
import Photopackedge from "../photopackedge/photopackedge";
import InputFiled from "../InputFiled/InputFiled";
import Countpackedge from "../Countpackedge/Countpackedge";

import OverviewCard from "../OverviewCard/OverviewCard";
import Overview from "../Overview/Overview";
import Fightdetails from "../Fightdetails/Fightdetails";
import Hotelcard from "../Hotelcard/Hotelcard";
import Frequently from "../../Frequently/Frequently";
import Headerticket from "../headerticket/headerticket";
import Haveaquestion from "../../Frequently/Haveaquestion/Haveaquestion";
import TextforHavequestion from "../../Frequently/TextforHavequestion/TextforHavequestion";
import Frequantlyquestion from "../Frequantlyquestion/Frequantlyquestion";
import Frequently_packedge from "../../Frequently/Frequently";
import RecomendedPackedge from "../RecomendedPackedge/RecomendedPackedge";
import TransportationPackedge from "../TransportationPackedge/TransportationPackedge";
export default function LayoutPackedge() {
  return (
    <>
      <div className="min-h-screen bg-white  text-[#1B2A41] p-4  md:p-10 font-sans">
        <div className="block md:col-span-2 ">
          <Headerpackedge />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          <div className="md:col-span-2">
            <Photopackedge />
          </div>

          <div className="max-w-md w-full bg-white shadow-md border rounded-2xl p-6 mx-auto space-y-5 text-sm md:text-base">
            <InputFiled />

            <Countpackedge />
          </div>
        </div>
        <Overview />
        <OverviewCard />
      </div>

      <Fightdetails />
      <Hotelcard />
      <TransportationPackedge />
      <Frequantlyquestion />
      <RecomendedPackedge />
    </>
  );
}
