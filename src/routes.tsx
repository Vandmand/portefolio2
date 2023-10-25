import { createHashRouter, RouterProvider } from 'react-router-dom'
import Index from '@routes/index'

function Routes() {

  const routes = createHashRouter([
    {
      path: '/',
      element: <Index />
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default Routes
