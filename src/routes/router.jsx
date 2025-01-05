import App from '../layouts/App'
import Home from '../pages/home/Home'

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router'

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
      },
      ]
    },

  ])

  return <RouterProvider router={router} />

}