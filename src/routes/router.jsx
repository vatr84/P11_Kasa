import App from '../layouts/App'
import Home from '../pages/home/Home'
import About from '../pages/about/About'

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
      {
        path: 'a-propos',
        element: <About />,
    },
      ]
    },

  ])

  return <RouterProvider router={router} />

}