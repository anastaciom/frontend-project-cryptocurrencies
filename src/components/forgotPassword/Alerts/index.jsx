import React, { useEffect, useState } from "react";
import { SuccessAlertStyle, ErrorAlertStyle } from "./style";
import { useSelector } from "react-redux";
import { CheckCircle, Error } from "@mui/icons-material/";

export default function Alerts() {
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const { status, error } = useSelector((state) => state.forgotPassword);

  useEffect(() => {
    if (status) {
      setShowSuccessAlert(true);
    } else if (error) {
      setShowErrorAlert(true);
    }
    setTimeout(() => {
      if (status) {
        setShowSuccessAlert(false);
      } else if (error) {
        setShowErrorAlert(false);
      }
    }, 3000);
  }, [error, status]);

  return (
    <>
      {showSuccessAlert ? (
        <SuccessAlertStyle>
          <CheckCircle /> {status}
        </SuccessAlertStyle>
      ) : showErrorAlert ? (
        <ErrorAlertStyle>
          <Error /> {error}
        </ErrorAlertStyle>
      ) : (
        ""
      )}
    </>
  );
}
