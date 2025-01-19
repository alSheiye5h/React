import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from './Index.jsx'
import Profiles from './Profiles.jsx'
import ProfilePage from './ProfilePage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/profiles',
    element: <Profiles  />
  },
  {
    path: '/profiles/:profileId',
    element: <ProfilePage />
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
