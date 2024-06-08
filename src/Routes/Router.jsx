import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignIn from "../Pages/SignInPage/SignIn";
import SignUp from "../Pages/SignUpPage/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "../Routes/PrivateRoute";
import AllUser from "../Components/Dashboard/Admin/AllUser/AllUser";
import AddSession from "../Components/Dashboard/Tutor/AddSession/AddSession";
import AllSessions from "../Components/Dashboard/Tutor/AllSessions/AllSessions";
import AllStudySessions from "../Components/Dashboard/Admin/AllStudySessions/AllStudySessions";
import StudySessionDetails from "../Components/StudySessionDetails/StudySessionDetails";
import AddStudentNotes from "../Components/Dashboard/Student/AddStudentNotes/AddStudentNotes";
import StudentPersonalNotes from "../Components/Dashboard/Student/StudentPersonalNotes/StudentPersonalNotes";
import UpdateNote from "../Components/Dashboard/Student/UpdateNote/UpdateNote";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import MyBookedSession from "../Components/Dashboard/Student/MyBookedSessions/MyBookedSession";
import ViewBookedSessionDetails from "../Components/Dashboard/Student/ViewBookedSessionDetails/ViewBookedSessionDetails";
import AllMaterials from "../Components/Dashboard/Tutor/AllMaterials/AllMaterials";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <AboutPage />
        },
        {
            path: '/contactUs',
            element: <ContactPage />
        },
        {
          path:'/study-session-details/:id',
          element: <PrivateRoute>
            <StudySessionDetails />
          </PrivateRoute>
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
        {
          path: 'all-study-sessions',
          element: <AllStudySessions />
        },
        // tutor related route
        {
          path: 'add-session',
        element:<AddSession />
        },
        {
          path: 'all-sessions',
          element: <AllSessions />
        },
        {
          path: 'all-materials',
          element: <AllMaterials />
        },
        // student related route
        {
          path: 'my-booked-sessions',
          element: <MyBookedSession />
        },
        {
          path: 'my-booked-sessions/view-details/:id',
          element: <ViewBookedSessionDetails />
        },
        {
          path: 'add-student-notes',
          element: <AddStudentNotes />
        },
        {
          path: 'student-personal-notes',
          element: <StudentPersonalNotes />
        },
        {
          path: 'student-personal-notes/update-note/:id',
          element: <UpdateNote />
        },
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