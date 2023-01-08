import React from "react";
import Root, { loader as rootLoader } from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss"
import Home from "./routes/Home";
import ErrorPage from "./error-page";
import Items from "./routes/Items";
import ItemsManagement from "./routes/Items/ItemsManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "items",
        element: <Items />,
      },
      {
        path: "items/manageitems",
        element: <ItemsManagement />,
      },
    ],
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
