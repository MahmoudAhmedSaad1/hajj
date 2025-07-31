import React from "react";
import Patternimg from "../patternimg/patternimg";
import Dots from "./Dots/Dots";
import UserImage from "./UserImage/UserImage";
import NameWCountry from "./NameWCountry/NameWCountry";
import MessageFeedback from "./MessageFeedback/MessageFeedback";
import Headerthisection from "./Headerthisection/Headerthisection";
import Rate from "./Rate/Rate";
export default function ThirdSection() {
  return (
    <>
      <Patternimg />
      <div className="bg-[#014c94] py-12 px-10 back_img rounded-[20px]  text-white">
        <div className="mx-auto ">
          <Headerthisection />
          <div className="grid md:grid-cols-4 justify-center gap-2  overflow-x-auto scrollbar-hide">
            <div className="bg-[#00325c] rounded-xl p-6 w-[300px] shrink-0">
              <div className="flex items-center mb-4">
                <UserImage />
                <NameWCountry />
              </div>
              <Rate />
              <MessageFeedback />
            </div>
          </div>

          <Dots />
        </div>
      </div>
      <Patternimg />
    </>
  );
}
