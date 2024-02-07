import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing";
import Login from "../pages/userAuth/login";
import Register from "../pages/userAuth/signUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/sign-up",
    element: <Register />
  },
])

export { router }