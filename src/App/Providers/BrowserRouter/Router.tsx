import { Create } from 'Pages/create'
import { Error } from 'Pages/error'
import { Home } from 'Pages/home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
      errorElement: <Error />
   },
   {
      path: '/create',
      element: <Create />,
      errorElement: <Error />
   }
])
