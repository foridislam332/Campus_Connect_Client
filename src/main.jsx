import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// react router
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'

// font family
import 'typeface-poppins';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>,
)
