
import { LuPlane } from "react-icons/lu";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaCar } from "react-icons/fa6";
import { GiDiscGolfBag } from "react-icons/gi";

import Headerticket from "../headerticket/headerticket";
import Flightrow from "../Flightrow/Flightrow";
import ServicesList from "../ServicesList/ServicesList";
import { FaHotel } from "react-icons/fa";

const serviceList = [
  {
    icon: <LuPlane className="bg-[#FFF8F2]" />,
    title: "Luggage Collection",
    desc: "Your bags are picked up directly by our airport concierge.",
  },
  {
    icon: <RiAccountCircleFill  />,
    title: "Guided Check-In",
    desc: "Support during airline check-in and boarding process.",
  },
  {
    icon: <FaCar  />,
    title: "Shared Airport Transfer",
    desc: "Transportation from airport to your hotel in an air-conditioned bus.",
  },
  {
    icon: <GiDiscGolfBag />,
    title: "Assistance with Luggage",
    desc: "Staff available to help you with your bags upon arrival.",
  },
  {
    icon: <FaHotel/>,
    title: "Assisted Hotel Check-In",
    desc: "Help provided at reception desk upon arrival.",
  },
];

export default function FlightDetailsPanel() {
  return (
    <div className="px-8">
      <div className="bg-white rounded-3xl   shadow p-6 md:w-[66%] w-full  me-auto">
        <div className="text-[#8c6d2f] font-semibold text-lg mb-4">
          Flight Details
        </div>
        <div className="space-y-4 mb-8">
          <Headerticket
            heading={"Standard Ticket "}
            pharagraph={
              "Enjoy a comfortable start to your pilgrimage with our standard service:"
            }
          />

          <Flightrow />

          <ServicesList serviceList={serviceList} />
        </div>

        <div className="space-y-4">
          <Headerticket
            heading={"Business ticket"}
            pharagraph={
              "Fast track service on Airport (VIP Service) – From Airport to Hotel, We Handle Everything:"
            }
          />

          <ServicesList serviceList={serviceList} />
        </div>
      </div>
    </div>
  );
}
