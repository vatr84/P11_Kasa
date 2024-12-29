import App from '../pages/App'

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router'

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },

  ])

  return <RouterProvider router={router} />

}