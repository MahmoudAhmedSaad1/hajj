
export default function AddsonAirportServicesStanderoption({selected,setSelected}) {
  return <>
   <label  className={`flex-1 border ${selected === 'standard' ? 'border-[#B38A57] border-2 bg-[#FFF8F2]' : 'border-[#E3E8EF]'} rounded-lg p-4 cursor-pointer transition-colors`}>
          <div className="flex items-start">
            <input
              id="airport-standard"
              type="radio"
              name="airport"
              value="standard"
              checked={selected === 'standard'}
              onChange={() => setSelected('standard')}
              className="mt-1 h-4 w-4 text-[#B38A57] border-gray-300 focus:ring-0 mr-3"
            />
            <div>
              <h4 className="text-base font-medium text-[#434344]">Standard Airport</h4>
              <p className="text-xs text-[#434344]">Normal Service</p>
              <p className="text-xs text-[#6B6C6F] mt-1">
                Lorem ipsum dolor sit amet consectetur, Velit condimentum quis viverra dictum eget tempus.
              </p>
            </div>
          </div>
        </label>
  </>
}
