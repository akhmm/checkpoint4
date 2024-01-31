import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";

import App from "./App";
import Home from "./pages/Home";
import Admin, { loaderAdmin } from "./pages/Admin";
import Connection from "./pages/Connection";
import AddMenu from "./pages/AddMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/connection",
        element: <Connection />,
      },
      {
        path: "/admin",
        element: <Admin />,
        loader: loaderAdmin,
      },
      {
        path: "/add-menu",
        element: <AddMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
