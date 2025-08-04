import React from "react";
import HeaderSecondSection from "../Secondsection/Header_second_Section/Header_second_Section";
import QuestionandAnswer from "./QuestionandAnswer/QuestionandAnswer";


export default function Frequently_packedge() {
  return (
    <>
    <HeaderSecondSection
            heading="Frequently asked questions"
            
          />
    
          <div className="w-[69%]  px-15 sm:px-6 lg:px-8 py-8">
            <QuestionandAnswer
              question={"Is there a free trial available?"}
              answer={
                "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
              }
            />
          </div>
      
    </>
  );
}
