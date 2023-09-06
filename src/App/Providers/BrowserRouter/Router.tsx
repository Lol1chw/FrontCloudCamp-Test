import { Home } from 'Pages/home/ui/home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />
   }
])
