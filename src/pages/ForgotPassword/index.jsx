import React from "react";
import Description from "../../components/forgotPassword/Description";
import Form from "../../components/forgotPassword/Form";
import {PageStyle} from './index.style'
export default function ForgotPasswordPage() {
  return (
    <PageStyle>
      <Description />
      <Form />
    </PageStyle>
  );
}
