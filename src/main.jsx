import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Surveys from './components/Surveys/Surveys.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import Stats from './components/DashBoard/Stats.jsx';
import Users from './components/DashBoard/Users/Users.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SurveyCreate from './components/SurveyCreate/SurveyCreate.jsx';
import SurveysDetails from './components/Surveys/SurveysDetails.jsx';
import SurveyResults from './components/SurveyResults/SurveyResults.jsx';
import Pricing from './components/Pricing/Pricing.jsx';
import Payment from './components/Payment/Payment.jsx';
import AllSurveys from './components/Surveys/AllSurveys.jsx';
import SurveyEdit from './components/Surveys/SurveyEdit.jsx';
import ResponseTable from './components/Response/ResponseTable.jsx';
import PaymentsData from './components/Payment/PaymentsData.jsx';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {  
        path: "/",
        element: <Home></Home>
      },
      {  
        path: "/Home",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/Surveys",
        element: <Surveys></Surveys>
      },
      {
        path: "/details/:id",
        element: <SurveysDetails></SurveysDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.id}`)
      },
      {
        path: "/results/:id",
        element: <SurveyResults></SurveyResults>,
        loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.id}`)
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>

      },
      {
        path: "/payment",
        element: <Payment></Payment>
      },
      
      
  ]
  },
  //dashboard
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "stats",
        element: <Stats></Stats>
      },
      {
        path: "users",
        element: <Users></Users> 
      },
      {
        path: "createSurvey",
        element: <SurveyCreate></SurveyCreate>
      },
      {
        path: 'allSurveys',
        element: <AllSurveys></AllSurveys>
      },
      {
        path: 'updateSurvey/:id',
        element: <SurveyEdit></SurveyEdit>,
        loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.id}`)

      },
      {
        path: 'tableResponse',
        element: <ResponseTable></ResponseTable>
      },
      {
        path: 'paymentsData',
        element: <PaymentsData></PaymentsData>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
     </AuthProvider>
  </React.StrictMode>,
)
