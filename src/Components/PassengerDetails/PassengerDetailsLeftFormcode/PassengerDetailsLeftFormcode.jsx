
export default function PassengerDetailsLeftFormcode() {
  return <>
  <div>
              <label className="block text-sm font-medium text-[#003E71]">Code *</label>
              <select
                defaultValue="Egypt (+20)"
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003E71]"
              >
                <option>Egypt (+20)</option>
                <option>USA (+1)</option>
                <option>UK (+44)</option>
              </select>
            </div>
  </>
}
