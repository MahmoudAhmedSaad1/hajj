

import PassengerDetailsRightsummaryheader from '../PassengerDetailsRightsummaryheader/PassengerDetailsRightsummaryheader';
import PassengerDetailsRightsummarybody from '../PassengerDetailsRightsummarybody/PassengerDetailsRightsummarybody';
import PassengerDetailsRightsummaryul from '../PassengerDetailsRightsummaryul/PassengerDetailsRightsummaryul';
export default function PassengerDetailsRightsummary({children,adults}) {
  return <>
 <div className="w-full lg:w-1/3  bg-white p-6 rounded-lg shadow">
       <PassengerDetailsRightsummaryheader/>
       <PassengerDetailsRightsummarybody/>
        <PassengerDetailsRightsummaryul children={children} adults={adults}/> 
      </div>

  </>
}
