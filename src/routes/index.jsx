import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing";
import Login from "../pages/userAuth/login";
import Register from "../pages/userAuth/signUp";
import Layout from "../components/navigation/layout";
import Home from "../pages/Dashboard/home";
import Profile from "../pages/Dashboard/profile";

const router = createBrowserRouter([
  {
    path: "/home",
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

  {
    path: '/',
    element: <Layout/>,
    children:[
    {
      path: '/', 
      element: <Home/>
    },
    {
      path: '/profile', 
      element: <Profile/>
    }
      
    ]
  }
])

export { router }