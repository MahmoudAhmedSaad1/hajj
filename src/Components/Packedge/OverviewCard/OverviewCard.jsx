
import IconsOverviewCard from "../IconsOverviewCard/IconsOverviewCard";
import Descriptiontrip from "../descriptiontrip/descriptiontrip";

import Endpackedge from "../endpackedge/endpackedge";
import Buttonendepackedge from "../Buttonendepackedge/Buttonendepackedge";

export default function OverviewCard() {
  return (
    <div className="bg-white rounded-3xl shadow p-6 w-fit md:w-[66%] mt-6 space-y-4">
   
      <div className="text-[#BC8B2C] font-semibold text-lg mb-2">Overview</div>

   
   <IconsOverviewCard/>

     
      <div className="my-2">
        <span className=" bg-orange-50 text-[#BC8B2C] rounded-md px-3 py-1 text-xs font-medium">
          From 18 Aug - 30 Aug
        </span>
      </div>

      {/* وصف الرحلة */}
      <Descriptiontrip/>

      {/* بطاقة الشركة وزر الأفاتار */}
      <div className="flex items-center justify-between bg-blue-50 rounded-xl px-4 py-3 mt-3">
       <Endpackedge/>
     <Buttonendepackedge/>
      </div>
    </div>
  );
}
