import Addsonbuttonaddmybook from "../Addsonbuttonaddmybook/Addsonbuttonaddmybook";
import Addsonbuttonsize from "../Addsonbuttonsize/Addsonbuttonsize";
import Addsonhandpharagraph from "../Addsonhandpharagraph/Addsonhandpharagraph";
import Addsonheader from "../Addsonheader/Addsonheader";
import Addsonimg from "../Addsonimg/Addsonimg";
import Addsonprice from "../Addsonprice/Addsonprice";

export default function Addsonlayoutforadd() {
  return (
    <>
      <Addsonheader />

      <div className="flex rounded-lg shadow p-5 flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 my-5 md:space-x-6">
        <Addsonimg />
        <div className="flex-1 md:text-left p-2">
          <Addsonhandpharagraph />
          <div className="mt-2 flex items-baseline space-x-2">
            <Addsonprice />
          </div>
        </div>
        <div className="flex flex-col items-center ms-14 md:items-center  space-y-5 w-full md:w-[30%]">
          <Addsonbuttonsize />
          <Addsonbuttonaddmybook />
        </div>
      </div>
    </>
  );
}
