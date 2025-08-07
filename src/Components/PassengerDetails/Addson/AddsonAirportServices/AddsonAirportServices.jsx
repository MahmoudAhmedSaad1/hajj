import React, { useState } from 'react';
import AddsonAirportServicesAhlanoption from '../AddsonAirportServicesAhlanoption/AddsonAirportServicesAhlanoption';
import AddsonAirportServicesStanderoption from '../AddsonAirportServicesStanderoption/AddsonAirportServicesStanderoption';

export default function AirportServices() {
  const [selected, setSelected] = useState('standard');

  return (
    <div className="bg-white rounded-xl p-8">
      <div className='shadow rounded-lg p-5'>
        <h3 className="text-lg font-bold text-[#003E71] mb-5">Airport Services</h3>
      <div className="flex flex-col sm:flex-row gap-4">

       <AddsonAirportServicesStanderoption setSelected={setSelected} selected={selected}/>

    
       <AddsonAirportServicesAhlanoption setSelected={setSelected} selected={selected} />
      </div>
      </div>
    </div>
  );
}
