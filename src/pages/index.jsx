import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import { useSelector } from "react-redux";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import DashboardPage from "./DashboardPage";
import { auth } from "../redux/actions/auth.actions";
import { useDispatch } from "react-redux";
import ForgotPasswordPage from "./ForgotPassword";
import ResetPasswordPage from "./ResetPassword";
import ProfileArea from "../components/dashboard/ProfileArea";
import FavoritesArea from "../components/dashboard/FavoritesArea";
import SettingsArea from "../components/dashboard/SettingsArea";
import PageNotFound from "./ErrorsPage/PageNotFound";
import RouteNotAuthorizated from "./ErrorsPage/RouteNotAuthorizated";

export default function AppRoutes() {
  function PrivateRoute() {
    const dispatch = useDispatch();
    const { isAuthenticated, loading, error } = useSelector(
      (state) => state.auth
    );
    useEffect(() => {
      dispatch(auth());
    }, [dispatch]);

    if (loading) {
      return <h1>loading....</h1>;
    }
    if (!loading && !error && isAuthenticated) {
      return <DashboardPage />;
    }
    if (!loading && !isAuthenticated) {
      return <RouteNotAuthorizated/>
    }
  }

  return (
    <Routes>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signin/forgot_password" element={<ForgotPasswordPage />} />
      <Route path="/signin/reset_password" element={<ResetPasswordPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard/" element={<PrivateRoute />}>
        <Route path="" element={<Navigate to="/dashboard/profile" />} />
        <Route path="profile" element={<ProfileArea />} />
        <Route path="favorites" element={<FavoritesArea/>} />
        <Route path="settings" element={<SettingsArea/>} />
      </Route>
    </Routes>
  );
}
