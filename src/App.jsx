import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeWrapper from "./pages/HomeWrapper";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;