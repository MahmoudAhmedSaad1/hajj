import PhotoCard from "./Photo_Card/Photo_Card";
import Offer from "./Offer/Offer";
import Days from "./Days/Days";
import Span_Phara from "./Span_Phara/Span_Phara";
import IconsDes from "./Icons_des/Icons_des";
import Price from "./Price/Price";
import Seatsremaning from "./SeatsRemaning/SeatsRemaning";
import Buttoncard from "./Buttoncard/Buttoncard";
import ButtonSection2 from "./ButtonSection2/ButtonSection2";
export default function Card() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto p-4 ">
        <div className=" rounded-2xl shadow-lg bg-white overflow-hidden mx-auto">
          <div className="relative">
            <PhotoCard />
            <Offer />
            <Days />
          </div>
          <div className="p-4">
            <Span_Phara />
            <IconsDes />
            <div className="flex items-center justify-between mb-3 text-[#A08255]">
              <Price />
              <Seatsremaning />
            </div>
            <Buttoncard />
          </div>
        </div>
      </div>
      <div className="flex justify-center p-1 mt-6 ">
        <ButtonSection2 btn="View More" />
      </div>
    </>
  );
}
