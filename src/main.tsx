import ReactDOM from 'react-dom/client'
import './index.css'
import { CartContextProvider } from './Context/CartContext';
import router from './Router';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartContextProvider>
  <RouterProvider router={router} />
</CartContextProvider>
)