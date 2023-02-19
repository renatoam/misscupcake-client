import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <main><Outlet /></main>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'product/:id',
        element: <p>Product Details</p>
      }
    ]
  }
])

export default router
