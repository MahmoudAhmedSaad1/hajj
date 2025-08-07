import { FaPlus } from "react-icons/fa";
export default function PassengerDetailsLeftFormcountersplus({
  value,
  increase,
  setter,
}) {
  return (
    <>
      <button
        type="button"
        onClick={() => increase(setter, value)}
        className="w-6 h-6 flex items-center justify-center text-white  bg-[#003E71] rounded"
      >
        <FaPlus />
      </button>
    </>
  );
}
