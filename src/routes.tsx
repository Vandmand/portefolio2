import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from '@routes/index'
import { Test } from './routes/test'
import Projects from './routes/projects'
import NotFound from './routes/notFound'
import Admin from './routes/admin'

function Routes() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Index />
    },
    {
      path: '/test',
      element: <Test />
    },
    {
      path: '/projects',
      element: <Projects />
    },
    {
      path: '/admin',
      element: <Admin />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default Routes
