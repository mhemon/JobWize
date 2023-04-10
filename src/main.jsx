import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import Jobs from './components/Jobs/Jobs'
import Blog from './components/Blog/Blog'
import JobDetails from './components/JobDetails/JobDetails'
import jobsdataLoader from './loaders/getJobsdata'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    loader: jobsdataLoader,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'statistics',
        element: <Statistics/>
      },
      {
        path: 'applied-jobs',
        element: <Jobs/>
      },
      {
        path: 'blog',
        element: <Blog/>
      },
      {
        path: 'job-details/:ID',
        element: <JobDetails/>,
        loader: jobsdataLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
