export default function AddsonAirportServicesAhlanoptionphoto({selected,setSelected}) {
  return <>
  <input
              id="airport-vip"
              type="radio"
              name="airport"
              value="vip"
              checked={selected === 'vip'}
              onChange={() => setSelected('vip')}
              className="mt-1 h-4 w-4 text-[#B38A57] border-gray-300 focus:ring-0 mr-3"
            />
  </>
}
