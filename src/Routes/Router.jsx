import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignIn from "../Pages/SignInPage/SignIn";
import SignUp from "../Pages/SignUpPage/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "../Routes/PrivateRoute";
import AllUser from "../Components/Dashboard/AllUser/AllUser";
import AddSession from "../Components/Dashboard/AddSession/AddSession";
import AllSessions from "../Components/Dashboard/AllSessions/AllSessions";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home />
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>,
      children:[
        // admin related route
        {
          path: 'allUsers',
          element: <AllUser />
        },
        // tutor related route
        {
          path: 'add-session',
          element:<AddSession />
        },
        {
          path: 'all-sessions',
          element: <AllSessions />
        }
      ]
    },
    {
      path:'/signIn',
      element: <SignIn />
    },
    {
      path: '/signUp',
      element: <SignUp />
    }
  ]);