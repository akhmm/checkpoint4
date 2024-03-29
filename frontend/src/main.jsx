import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";

import App from "./App";
import Home, { loaderHome } from "./pages/Home";
import Admin, { loaderAdmin } from "./pages/Admin";
import Connection from "./pages/Connection";
import AddMenu from "./pages/AddMenu";
import EditMenu, { loaderEdit } from "./pages/EditMenu";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loaderHome,
      },
      {
        path: "/connection",
        element: <Connection />,
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
        loader: loaderAdmin,
      },
      {
        path: "/add-menu",
        element: (
          <ProtectedRoute>
            <AddMenu />
          </ProtectedRoute>
        ),
      },
      {
        path: "/edit-menu/:id",
        element: (
          <ProtectedRoute>
            <EditMenu />
          </ProtectedRoute>
        ),
        loader: loaderEdit,
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
