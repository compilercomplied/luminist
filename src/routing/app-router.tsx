import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LS } from "../constants";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { LoadingPage } from "../pages/public/loading/loading";
import { NotFoundPage } from "../pages/public/notfound/not-found";
import { PublicPage } from "../pages/public/public";

const protectRoute = (page: React.ReactElement) => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  const pageToRender = isAuthenticated ? page : <Navigate to="/login" />;

  if (isAuthenticated) {
    getAccessTokenSilently().then((token) =>
      localStorage.setItem(LS.token, token)
    );
  }

  return isLoading ? <LoadingPage /> : pageToRender;
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicPage />} />

        <Route path="/" element={protectRoute(<DashboardPage />)} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
