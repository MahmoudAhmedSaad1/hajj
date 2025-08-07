import  { useState } from 'react';
import AddsonSpicialActitvityheadingtitle from '../AddsonSpicialActitvityheadingtitle/AddsonSpicialActitvityheadingtitle';
import AddsonSpicialActitvityphoto from '../AddsonSpicialActitvityphoto/AddsonSpicialActitvityphoto';
import AddsonSpicialActitvitybutton from '../AddsonSpicialActitvitybutton/AddsonSpicialActitvitybutton';

export default function AddsonSpicialActitvity() {
  const [selected, setSelected] = useState('external');

  return (
    <div className='p-7 shadow-xl bg-white rounded-xl'>
      <div className="bg-white rounded-xl p-6  shadow-lg ">
      <h3 className="text-lg font-bold text-[#053E66] mb-5">Special Activities</h3>
      <div className="flex flex-nowrap gap-4 mb-6">
        <label
          
          className={`flex-1 border ${selected === 'external' ? 'border-[#B38A57] border-2 bg-[#FFF8F2]' : 'border-[#E3E8EF]'} shadow-lg shadow-white rounded-lg p-5 cursor-pointer transition-colors`}
        >
          <div className="flex items-start space-x-3">
           <AddsonSpicialActitvityphoto setSelected={setSelected} selected={selected} />
           <AddsonSpicialActitvityheadingtitle heading={"External Trips"} title={"Lorem ipsum dolor sit amet consectetur. Velit condimentum quis viverra dictum eget tempus."}/>
          </div>
        </label>

        <label
          className={`flex-1 border ${selected === 'internal1' ? 'border-[#B38A57] border-2 bg-[#FFF8F2]' : 'border-[#E3E8EF]'} shadow-lg shadow-white rounded-lg p-5 cursor-pointer transition-colors`}
        >
          <div className="flex items-start space-x-3">
            <input
              id="internal1"
              type="radio"
              name="activity"
              checked={selected === 'internal1'}
              onChange={() => setSelected('internal1')}
              className="mt-1 h-4 w-4 text-[#B38A57] border-gray-300 focus:ring-0"
            />
                       <AddsonSpicialActitvityheadingtitle heading={"Internal Trips"} title={"Lorem ipsum dolor sit amet consectetur. Velit condimentum quis viverra dictum eget tempus."}/>

          </div>
        </label>
        <label
         
          className={`flex-1 border ${selected === 'internal2' ? 'border-[#B38A57] border-2 bg-[#FFF8F2]' : 'border-[#E3E8EF]'} shadow-lg shadow-white rounded-lg p-5 cursor-pointer transition-colors`}
        >
          <div className="flex items-start space-x-3">
            <input
              id="internal2"
              type="radio"
              name="activity"
              checked={selected === 'internal2'}
              onChange={() => setSelected('internal2')}
              className="mt-1 h-4 w-4 text-[#B38A57] border-gray-300 focus:ring-0"
            />
                                  <AddsonSpicialActitvityheadingtitle heading={"Internal Trips"} title={"Lorem ipsum dolor sit amet consectetur. Velit condimentum quis viverra dictum eget tempus."}/>

          </div>
        </label>
      </div>
    
    </div>
     <AddsonSpicialActitvitybutton pat={"/payment"} title={"Continue to Payment"}/>
    </div>
  );
}