import React from "react";
import HeaderSecondSection from "./Header_second_Section/Header_second_Section";
import Card from "./Card/Card";

export default function Secondsection() {
  return (
    <>
      <div>
        <HeaderSecondSection
          heading="Explore our programs  and trips"
          pharagraph="We understand that every traveler has different preferences. that’s why our platform’s good."
        />
        <Card />
      </div>
    </>
  );
}
