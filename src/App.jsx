import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeWrapper from "./pages/HomeWrapper";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import DashboardWrapper from "./pages/DashboardWrapper";
import { loader as userLoader } from "./pages/DashboardWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
  {
    path: "dashboard",
    element: <DashboardWrapper />,
    loader: userLoader
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;