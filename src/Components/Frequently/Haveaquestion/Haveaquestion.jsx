
import ButtonSection2 from "../../Secondsection/Card/ButtonSection2/ButtonSection2";
import TextforHavequestion from "../TextforHavequestion/TextforHavequestion";
import PhotoProfil from "../PhotoProfil/PhotoProfil";


export default function Haveaquestion() {
  return ( <div>
    <div className="bg-[#FBEEE1] rounded-xl py-10 px-6 sm:px-12 text-center w-[95%] mx-auto mt-12">
     
     <PhotoProfil/>

 <TextforHavequestion heading={"Still have questions?"} paragraph={"Can’t find the answer you’re looking for? Please chat to our friendly team."}/>

     
      <div className="mt-6">
        <ButtonSection2 btn={"Get in Touch"}/>
      </div>
    </div>
  
    
  </div>
  );
}
