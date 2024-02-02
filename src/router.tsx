import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import { HomePageContextProvider } from "./components/pages/HomePage/HomePage.context";
const ProductDetailsPage = lazy(() => import("./components/pages/ProductDetailsPage/ProductDetailsPage"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <HomePageContextProvider children={<HomePage />} />,
      },
      {
        path: 'product/:id',
        element: <ProductDetailsPage />
      }
    ]
  }
])

export default router
