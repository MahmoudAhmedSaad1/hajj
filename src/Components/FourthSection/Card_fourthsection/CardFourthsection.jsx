import React from "react";
import ButtonSection2 from "../../Secondsection/Card/ButtonSection2/ButtonSection2";
import CardFourthimg from "../Card_fourthimg/Card_fourthimg";
import CardFourthrate from "../Card_fourthrate/Card_fourthrate";
import CardFourthlocation from "../Card_fourthlocation/Card_fourthlocation";
import CardFourthreviewers from "../Card_fourthreviewers/Card_fourthreviewers";
import CardFourtharrow from "../Card_fourtharrow/Card_fourtharrow";
import Patternimg from "./../../patternimg/patternimg";
export default function CardFourthsection() {
  return (
    <>
      <div className="grid md:grid-cols-3 justify-center gap-5 mt-8">
        <div className="max-w-sm md:max-w-md bg-white rounded-2xl shadow-md overflow-hidden border p-4 flex flex-col gap-4">
          <CardFourthimg />
          <div className="flex flex-col gap-2 ">
            <CardFourthrate />

            <CardFourthlocation />

            <div className="flex items-center justify-between text-gray-700 p-0 ms-1 text-sm">
              <CardFourthreviewers />
              <CardFourtharrow />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-1 mt-6 ">
        <ButtonSection2 btn="View More" />
      </div>
      <Patternimg/>
    </>
  );
}
