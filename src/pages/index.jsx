import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import { useSelector } from "react-redux";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import DashboardPage from "./DashboardPage";
import { auth } from "../redux/actions/auth.actions";
import { authAdmin } from "../redux/actions/authAdmin.actions";
import { useDispatch } from "react-redux";
import ForgotPasswordPage from "./ForgotPassword";
import ResetPasswordPage from "./ResetPassword";
import ProfileArea from "../components/dashboard/ProfileArea";
import FavoritesArea from "../components/dashboard/FavoritesArea";
import SettingsArea from "../components/dashboard/SettingsArea";
import PageNotFound from "./ErrorsPage/PageNotFound";
import RouteNotAuthorizated from "./ErrorsPage/RouteNotAuthorizated";
import Loading from "./LoadingPage";
import SignInAdmin from "./SignInAdminPage";
import DashboardAdminPage from "./DashboardAdminPage";

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
      return <Loading loading={loading}/>
    }
    if (!loading && !error && isAuthenticated) {
      return <DashboardPage />;
    }
    if (!loading && !isAuthenticated) {
      return <RouteNotAuthorizated />;
    }
  }


  function AdminRoute() {
    const dispatch = useDispatch();
    const { isAdmin, loading, error } = useSelector(
      (state) => state.authAdmin
    );
    useEffect(() => {
      dispatch(authAdmin());
    }, [dispatch]);

    if (loading) {
      return <Loading loading={loading}/>
    }
    if (!loading && !error && isAdmin) {
      return <DashboardAdminPage/>;
    }
    if (!loading && !isAdmin) {
      return <RouteNotAuthorizated />;
    }
  }


  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signin/forgot_password" element={<ForgotPasswordPage />} />
      <Route path="/signin/reset_password" element={<ResetPasswordPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard/" element={<PrivateRoute />}>
        <Route path="" element={<Navigate to="/dashboard/profile" />} />
        <Route path="profile" element={<ProfileArea />} />
        <Route path="favorites" element={<FavoritesArea />} />
        <Route path="settings" element={<SettingsArea />} />
      </Route>
      <Route path="/admin" element={<SignInAdmin/>}/>
      <Route path="/admin/dashboard" element={<AdminRoute/>} />
    </Routes>
  );
}
