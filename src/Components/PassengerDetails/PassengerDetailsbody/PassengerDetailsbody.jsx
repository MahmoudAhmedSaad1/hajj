import React, { useState } from "react";
import PassengerDetailsLeftForm from "../PassengerDetailsLeftForm/PassengerDetailsLeftForm";
import PassengerDetailsRightsummary from "../PassengerDetailsRightsummary/PassengerDetailsRightsummary";
export default function PassengerDetailsbody() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const increase = (setter, value) => setter(value + 1);
  const decrease = (setter, value) => setter(value > 0 ? value - 1 : 0);
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-50">
      <PassengerDetailsLeftForm
        decrease={decrease}
        increase={increase}
        children={children}
        adults={adults}
        setChildren={setChildren}
        setAdults={setAdults}
      />

      <PassengerDetailsRightsummary children={children} adults={adults} />
    </div>
  );
}
