import PassengerDetailsLeftFormcountersplus from "../PassengerDetailsLeftFormcountersplus/PassengerDetailsLeftFormcountersplus";
import PassengerDetailsLeftFormcountersminus from "../PassengerDetailsLeftFormcountersminus/PassengerDetailsLeftFormcountersminus";
export default function PassengerDetailsLeftFormcounters({
  decrease,
  increase,
  children,
  adults,
  setChildren,
  setAdults,
  setInfants,
  infants,
}) {
  return (
    <>
      <div className="space-y-4">
        {[
          {
            label: "No. of Adults (+12 years)*",
            value: adults,
            setter: setAdults,
          },
          {
            label: "No. of Children (2-12 years)*",
            value: children,
            setter: setChildren,
          },
          {
            label: "No. of Infants (0-2 years)*",
            value: infants,
            setter: setInfants,
          },
        ].map(({ label, value, setter }) => (
          <>
            <h3 key={label} className="text-sm text-[#003E71]">
              {label}
            </h3>
            <div className="flex items-center justify-center border border-gray-300 rounded px-4 py-2">
              <div className="flex items-center gap-3">
                <PassengerDetailsLeftFormcountersminus
                  value={value}
                  setter={setter}
                  decrease={decrease}
                />
                <span className="w-6 text-center text-[#185686]">{value}</span>
                <PassengerDetailsLeftFormcountersplus
                  value={value}
                  setter={setter}
                  increase={increase}
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
