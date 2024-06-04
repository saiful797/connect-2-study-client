import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignIn from "../Pages/SignInPage/SignIn";
import SignUp from "../Pages/SignUpPage/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "../Routes/PrivateRoute";
import AllUsers from "../Components/Dashboard/AllUsers/AllUsers";


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
        {
          path: 'allUsers',
          element: <AllUsers />
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