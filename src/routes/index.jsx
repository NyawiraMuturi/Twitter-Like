import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing";
import Login from "../pages/userAuth/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },

  {
    path: "/login",
    element: <Login />
  },
])

export { router }