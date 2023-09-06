import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './Providers/BrowserRouter/Router'
import { store } from './Providers/StoreProvider/Store'
import './App.css'

export function App() {
   return (
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   )
}
