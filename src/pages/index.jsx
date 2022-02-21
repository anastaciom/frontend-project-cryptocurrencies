import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import { useSelector } from "react-redux";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import DashboardPage from "./DashboardPage";
import { auth } from "../redux/actions/auth.actions";
import { useDispatch } from "react-redux";
import ForgotPasswordPage from "./Forgot_password";

export default function AppRoutes() {
  function PrivateRoute() {
    const dispatch = useDispatch();
    const { isAuthenticated, loading, error} = useSelector(
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
      return <h1>error....</h1>;
      // 3min later redirect '/'
    }
  }

  return (
    <Routes>
      <Route path="*" element={<h1>Opsss.....</h1>} />
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signin/forgot_password" element={<ForgotPasswordPage/>} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<PrivateRoute />} />
    </Routes>
  );
}
