import logo from './logo.svg';
import './App.css';
import Main from './Components/Layout/Main';
import About from './Components/About/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Orders from './Components/Orders/Orders';
import Error from './Components/Erore/Error';
import OrderReview from './Components/OrderReview/OrderReview'
import { productAndCartLoader } from './ProductAndCartLoader/ProductAndCartLoaderData';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/orders',
          loader: () => {
            return fetch('products.json')
          },
          element: <Orders></Orders>
        },
        {
          path: '/orderreview',
          loader: () => {
            return productAndCartLoader();
          },
          element: <OrderReview></OrderReview>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '*',
          element: <Error></Error>
        }
      ]
    },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
