import React from "react";
import Patternimg from "../patternimg/patternimg";
import FirstSection from "./firstSection/firstSection";
import Secondsection from "../Secondsection/Secondsection";
import ThirdSection from "../ThirdSection/ThirdSection";
import FourthSection from "../FourthSection/FourthSection";

export default function home() {
  return (
    <>
      <FirstSection/>
      <Patternimg />
      <Secondsection/>
      <ThirdSection />
      <FourthSection/>
    </>
  );
}
