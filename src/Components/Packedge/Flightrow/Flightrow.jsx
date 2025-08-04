import Leftairline from "../Leftairline/Leftairline";
import Middletimeline from "../Middletimeline/Middletimeline";
import Rightdestionation from "../rightdestionation/rightdestionation";

const flightSample = [
  {
    from: "Cairo International Airport (CAI)",
    to: "Jeddah International Airport (CAI)",
    departTime: "4:50 pm",
    arriveTime: "7:50 pm",
    date: "12-8-2024",
    airlineLogo: "/src/assets/imgs/Logo (1).png",
    airlineName: "SAUDIA",
  },
  {
    from: "Jeddah International Airport (CAI)",
    to: "Cairo International Airport (CAI)",
    departTime: "4:50 pm",
    arriveTime: "7:50 pm",
    date: "12-8-2024",
    airlineLogo: "/src/assets/imgs/Logo (1).png",
    airlineName: "SAUDIA",
  },
];
export default function Flightrow() {
  function FlightRow({ flight }) {
    return (
      <div className="flex flex-col md:flex-row items-center gap-4 py-4 border-b last:border-b-0">
        <Leftairline flight={flight} />

        <Middletimeline flight={flight} />

        <Rightdestionation flight={flight} />
      </div>
    );
  }
  return (
    <>
      <div className="border rounded-lg overflow-hidden md:p-4">
        {flightSample.map((f, id) => (
          <FlightRow key={id} flight={f} />
        ))}
      </div>
    </>
  );
}
