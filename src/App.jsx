import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeWrapper from "./pages/HomeWrapper";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import DashboardWrapper from "./pages/DashboardWrapper";
import { loader as userLoader } from "./pages/DashboardWrapper";
import { loader as authLoader } from "../src/components/Login";
import Jobs from "./components/Jobs";
import Companies from "./components/Companies";
import Applications from "./components/Applications";
import Profile from "./components/Profile";
import { loader as companyLoader } from "./components/Companies";

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
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />,
        loader: authLoader
      }
    ]
  },
  {
    path: "dashboard",
    element: <DashboardWrapper />,
    loader: userLoader,
    children: [
      {
        path: "companies",
        element: <Companies />,
        loader: companyLoader
    },
      {
        path: "jobs",
        element: <Jobs />
      },
      {
        path: "applications",
        element: <Applications />
      },
      {
        path: "profile",
        element: <Profile />,
        loader: userLoader
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;