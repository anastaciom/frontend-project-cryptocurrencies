import React from "react";
import Alerts from "../../components/forgotPassword/Alerts";
import Description from "../../components/forgotPassword/Description";
import Form from "../../components/forgotPassword/Form";
import {PageStyle} from './index.style'
export default function ForgotPasswordPage() {
  return (
    <PageStyle>
      <Alerts/>
      <Description />
      <Form />
    </PageStyle>
  );
}
