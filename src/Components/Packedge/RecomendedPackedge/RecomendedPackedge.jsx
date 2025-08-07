import React from "react";
import HeaderSecondSection from "../../Secondsection/Header_second_Section/Header_second_Section";
import Card from "../../Secondsection/Card/Card";
import Patternimg from "../../patternimg/patternimg";

export default function RecomendedPackedge() {
  return (
    <>  
    <Patternimg/>
      <div>
        <HeaderSecondSection
          heading="Other Recommended Packages"
          pharagraph="We understand that every traveler has different preferences. that’s why our platform’s good."
        />
        <Card />
        
      </div>
    </>
  );
}
