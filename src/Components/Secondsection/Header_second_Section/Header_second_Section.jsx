import React from "react";
import Heading from "../Heading/Heading";
import Pharagraph from "../Pharagraph/Pharagraph";
export default function HeaderSecondSection({heading, pharagraph }) {
  return (
    <>
       <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-1 md:mb-4 container  mx-auto px-4">
        <Heading heading={heading}/>
        <Pharagraph pharagraph={pharagraph} />
        
      </div>

    </>
  );
}
