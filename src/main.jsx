import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// react router
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'

// font family
import 'typeface-poppins';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
