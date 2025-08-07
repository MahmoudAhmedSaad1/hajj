import AddsonAirportServicesAhlanoptioncontant from "../AddsonAirportServicesAhlanoptioncontant/AddsonAirportServicesAhlanoptioncontant";
import AddsonAirportServicesAhlanoptionphoto from "../AddsonAirportServicesAhlanoptionphoto/AddsonAirportServicesAhlanoptionphoto";

export default function AddsonAirportServicesAhlanoption({selected,setSelected}) {
  return <>
   <label className={`flex-1 border ${selected === 'vip' ? 'border-[#B38A57] border-2 bg-[#FFF8F2]' : 'border-[#E3E8EF]'} rounded-lg p-4 cursor-pointer transition-colors`}>
          <div className="flex items-start">
            <AddsonAirportServicesAhlanoptionphoto selected={selected} setSelected={setSelected}/>
    <AddsonAirportServicesAhlanoptioncontant/>
          </div>
        </label>
  </>
}
