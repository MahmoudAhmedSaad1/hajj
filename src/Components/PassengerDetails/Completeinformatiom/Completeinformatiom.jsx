import Completeinformatiomuploadphotos from "./Completeinformatiomuploadphotos/Completeinformatiomuploadphotos";
import AddsonSpicialActitvitybutton from "../Addson/AddsonSpicialActitvitybutton/AddsonSpicialActitvitybutton";
export default function Completeinformatiom() {
  return (
    <div className=" bg-gray-50 p-6">
      <h2 className="text-xl font-bold  text-[#003E71] text-center mb-8">
        Here is complete your remaining information
      </h2>
      <div className="bg-white rounded-2xl p-6 shadow-md max-w-6xl mx-auto my-10">
        <h3 className="text-2xl font-bold text-[#003E71] mb-6">Traveler 1</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <Completeinformatiomuploadphotos
            heading={"Passport photo*"}
            pharagraph={"please upload a clear passport photo"}
          />
          <div className="flex-1">
            <Completeinformatiomuploadphotos
              heading={"Personal photo*"}
              pharagraph={"please upload a clear Personal photo"}
            />
          </div>
        </div>
      </div>
       <AddsonSpicialActitvitybutton
              pat={"/rateYourexperience"}
              title={"Submit"}
            />
    </div>
  );
}
