import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Foods from './component/Foods/Foods';
import Food from './component/Food/Food';
import FoodDetails from './component/FoodDetails/FoodDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: 'foods',
        element: <Foods></Foods>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      },
      {
        path: 'food/:foodId',
        element: <FoodDetails></FoodDetails>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
