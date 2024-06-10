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
import UploadMaterials from "../Components/Dashboard/Tutor/UploadMaterials/UploadMaterials";
import UpdateMaterial from "../Components/Dashboard/Tutor/AllMaterials/UpdateMaterial/UpdateMaterial";
import AllSessionMaterials from "../Components/Dashboard/Admin/AllSessionMaterials/AllSessionMaterials";
import AddUserRole from "../Components/Dashboard/Admin/AllUser/AddUserRole/AddUserRole";
import UserProfile from "../Components/Shared/UserProfile";
import AdminRoute from "./AdminRoute";
import RejectionFeedback from "../Components/Dashboard/Tutor/RejectionFeedback/RejectionFeedback";
import TutorRoute from "./TutorRoute";


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
        // Common route
        {
          path: 'user-profile',
          element: <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        },

        
        // admin related route
        {
          path: 'allUsers',
          element: <PrivateRoute>
            <AdminRoute>
              <AllUser />
            </AdminRoute>
          </PrivateRoute>
        },
        {
          path: 'allUsers/change-user-role/:id',
          element: <PrivateRoute>
            <AdminRoute>
              <AddUserRole />
            </AdminRoute>
          </PrivateRoute>
        },
        {
          path: 'all-study-sessions',
          element: <PrivateRoute>
            <AdminRoute>
              <AllStudySessions />
            </AdminRoute>
          </PrivateRoute>
        },
        {
          path: 'all-session-materials',
          element: <PrivateRoute>
            <AdminRoute>
              <AllSessionMaterials />
            </AdminRoute>
          </PrivateRoute>
        },


        // tutor related route
        {
          path: 'add-session',
          element:<PrivateRoute>
            <TutorRoute>
              <AddSession />
            </TutorRoute>
          </PrivateRoute>
        },
        {
          path: 'all-sessions',
          element: <PrivateRoute>
            <TutorRoute>
              <AllSessions />
            </TutorRoute>
          </PrivateRoute>
        },
        {
          path: 'all-materials',
          element: <PrivateRoute>
            <TutorRoute>
              <AllMaterials />
            </TutorRoute>
          </PrivateRoute>
        },
        {
          path: 'all-sessions/upload-materials/:id',
          element: <PrivateRoute>
            <TutorRoute>
              <UploadMaterials />
            </TutorRoute>
          </PrivateRoute>
        },
        {
          path: 'all-materials/update-material/:id',
          element: <PrivateRoute>
            <TutorRoute>
              <UpdateMaterial />
            </TutorRoute>
          </PrivateRoute>
        },
        {
          path:'rejection-feedback',
          element: <PrivateRoute>
            <TutorRoute>
              <RejectionFeedback />
            </TutorRoute>
          </PrivateRoute>
        },


        // student related route
        {
          path: 'my-booked-sessions',
          element:<PrivateRoute>
            <MyBookedSession />
          </PrivateRoute>
        },
        {
          path: 'my-booked-sessions/view-details/:id',
          element: <PrivateRoute>
            <ViewBookedSessionDetails />
          </PrivateRoute>
        },
        {
          path: 'add-student-notes',
          element: <PrivateRoute>
            <AddStudentNotes />
          </PrivateRoute>
        },
        {
          path: 'student-personal-notes',
          element: <PrivateRoute>
            <StudentPersonalNotes />
          </PrivateRoute>
        },
        {
          path: 'student-personal-notes/update-note/:id',
          element: <PrivateRoute>
            <UpdateNote />
          </PrivateRoute>
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