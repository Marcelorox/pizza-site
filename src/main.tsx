import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutUs from "./pages/AboutUsPage";
import TeamPage from "./pages/TeamPage";
import CateringPage from "./pages/CateringPage";
import FormPage from "./pages/FormPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/join-our-team",
    element: <TeamPage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/catering",
    element: <CateringPage />,
  },
  {
    path: "/contact-us",
    element: <FormPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
