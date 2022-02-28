import React from "react";
import Alerts from "../../components/resetPassword/Alerts";
import Form from "../../components/resetPassword/Form";
import { PageStyle } from "./index.style";

export default function ResetPasswordPage() {
  return (
    <PageStyle>
      <Alerts/>
      <Form />
    </PageStyle>
  );
}
