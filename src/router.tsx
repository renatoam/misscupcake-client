import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import { HomePageContextProvider } from "./components/pages/HomePage/HomePage.context";
import SearchPage from "./components/pages/SearchPage";
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
      },
      {
        path: 'search',
        element: <SearchPage />
      }
    ]
  }
])

export default router
