import React from "react";

import { LocalPaths } from "@paths/loclalPath";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <Navigate to={`${LocalPaths.Home}`} />
      ) : (
        <Navigate to={`${LocalPaths.Login}`} />
      )}
    </>
  );
};

export default ProtectedRoutes;