import React, { Suspense, lazy } from "react";

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
    { path: LocalPaths.Main, element: <MainPage /> },
    { path: LocalPaths.Error, element: <NotFound /> },
    { path: LocalPaths.Login, element: <LoginPage /> },
  ];
  const app = useRoutes(routes);
  return <>{app}</>;
};
