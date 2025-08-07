import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Programs from "./Components/Programs/Programs";
import Hotels from "./Components/Hotels/Hotels";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Notfound from "./Components/Notfound/Notfound";
import "./App.css";
import Packedge from "./Components/Packedge/Packedge";
import PassengerDetails from "./Components/PassengerDetails/PassengerDetails";
import Addson from "./Components/PassengerDetails/Addson/Addson";
import Payment from "./Components/PassengerDetails/Payment/Payment";
import ConfirmBooking from "./Components/PassengerDetails/ConfirmBooking/ConfirmBooking";
import Completeinformatiom from "./Components/PassengerDetails/Completeinformatiom/Completeinformatiom";
import RateYourExperience from "./Components/PassengerDetails/RateYourExperience/RateYourExperience";
let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index:true, element: <Home /> },
      { path: "programs", element: <Programs /> },
      { path: "hotels", element: <Hotels /> },
      { path: "Aboutus", element: <AboutUs /> },
      { path: "contactus", element: <ContactUs /> },
      { path: "packedge", element: <Packedge /> },
      { path: "Passengerdetails", element: <PassengerDetails /> },
      { path: "addson", element: <Addson /> },
      { path: "payment", element: <Payment /> },
      { path: "successful", element: <ConfirmBooking /> },
      { path: "completeinformatiom", element: <Completeinformatiom /> },
      { path: "rateYourexperience", element: <RateYourExperience /> },
      { path: "RateYourExperiencefeedback", element: <RateYourExperience /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={x}>

  </RouterProvider>
}

export default App;
