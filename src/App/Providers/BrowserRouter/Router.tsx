import { Create } from 'Pages/create'
import { Home } from 'Pages/home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />
   },
   {
      path: '/create',
      element: <Create />
   }
])
