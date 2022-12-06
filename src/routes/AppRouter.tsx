import React, { Suspense, lazy } from "react";

import { Products } from "@components/Products";
import { Profile } from "@components/Profile";
import Preloader from "@components/UI/Preloader";
import { LoginPage } from "@pages/LoginPage/";
import { MainPage } from "@pages/MainPage";
import { NotFound } from "@pages/NotFound";
import { LocalPaths } from "@paths/loclalPath";
import { RouteObject, useRoutes } from "react-router-dom";

const ProtectedRoutes = lazy(() => import("./ProtectedRoutes"));

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
              <Products />
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
      ],
    },
    { path: LocalPaths.Error, element: <NotFound /> },
    { path: LocalPaths.Login, element: <LoginPage /> },
  ];
  const app = useRoutes(routes);
  return <>{app}</>;
};
