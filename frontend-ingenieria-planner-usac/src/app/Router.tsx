import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";

import Classrooms from "../pages/Classrooms";
import Pensum from "../pages/Pensum";
import Schedules from "../pages/Schedules";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },

      { path: "classrooms", element: <Classrooms /> },
      { path: "pensum", element: <Pensum /> },
      { path: "schedules", element: <Schedules /> },
    ],
  },
]);