import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
const ProductDetailsPage = lazy(() => import("./components/pages/ProductDetailsPage/ProductDetailsPage"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Outlet /></>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'product/:id',
        element: <ProductDetailsPage />
      }
    ]
  }
])

export default router
