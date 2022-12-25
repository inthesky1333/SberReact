import React, { Suspense, lazy } from "react";

import { Profile } from "@components/Profile";
import Preloader from "@components/UI/Preloader";
import { CartPage } from "@pages/CartPage";
import { LoginPage } from "@pages/LoginPage/";
import { MainPage } from "@pages/MainPage";
import { NotFound } from "@pages/NotFound";
import { LocalPaths } from "@paths/loclalPath";
import { RouteObject, useRoutes } from "react-router-dom";

const ProtectedRoutes = lazy(() => import("./ProtectedRoutes"));
const ProductsPage = lazy(() => import("@pages/ProductsPage"));
const ProductDetailPage = lazy(() => import("@pages/ProductDetailPage"));

export const AppRouter = () => {
  const routes: RouteObject[] = [
    {
      path: LocalPaths.Home,
      element: (
        <Suspense fallback={<Preloader />}>
          <ProtectedRoutes />
        </Suspense>
      ),
    },
    {
      path: LocalPaths.Main,
      element: <MainPage />,
      children: [
        {
          path: LocalPaths.Products,
          element: (
            <Suspense fallback={<Preloader />}>
              <ProductsPage />
            </Suspense>
          ),
        },
        {
          path: LocalPaths.Cart,
          element: (
            <Suspense fallback={<Preloader />}>
              <CartPage />
            </Suspense>
          ),
        },
        {
          path: LocalPaths.Profile,
          element: (
            <Suspense fallback={<Preloader />}>
              <Profile />
            </Suspense>
          ),
        },
        {
          path: LocalPaths.ProductDetail,
          element: (
            <Suspense fallback={<Preloader />}>
              <ProductDetailPage />
            </Suspense>
          ),
        },
      ],
    },
    { path: LocalPaths.Error, element: <NotFound /> },
    { path: LocalPaths.Login, element: <LoginPage /> },
  ];
  const app = useRoutes(routes);
  return <>{app}</>;
};
