export default function AddsonSpicialActitvityphoto({selected , setSelected }) {
  return <>
   <input
              id="external"
              type="radio"
              name="activity"
              checked={selected === 'external'}
              onChange={() => setSelected('external')}
              className="mt-1 h-4 w-4 text-[#B38A57] border-gray-300 focus:ring-0"
            />
  </>
}
