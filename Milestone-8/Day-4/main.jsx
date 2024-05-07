import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './components/Home/Home';
import Applied_jobs from './components/applied_jobs/Applied_jobs';
import Blogs from './components/blogs/Blogs';
import Statistics from './components/statistics/Statistics';
import Errorpage from './components/errorpage/Errorpage';
import JobDetails from './components/jobdetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <Applied_jobs></Applied_jobs>,
        loader:()=>fetch('../public/data/jobs.json')
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../public/data/jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
