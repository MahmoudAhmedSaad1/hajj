import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Programs from "./Components/Programs/Programs";
import Hotels from "./Components/Hotels/Hotels";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Notfound from "./Components/Notfound/Notfound";
import "./App.css";
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
      { path: "*", element: <Notfound /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={x}>

  </RouterProvider>
}

export default App;
