import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './screens/home'
import Stake from './screens/stake'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './screens/error'

const router = createBrowserRouter ([
  {path: '/', element: <Home/>},
  {path: '/stakeNow', element: <Stake/>},
  {path: '*', element: <Error/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
