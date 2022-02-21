import React from "react";

export default function Description() {
  return (
    <>
      <h1>Forgot your password? no problem, we'll help you with that : )!!</h1>
      <h2>Step by step:</h2>
      <ol style={{ margin: 20 }}>
        <li>
          Inform the E-mail that is registered on the platform. Make sure it's
          spelled correctly!!
        </li>
        <li>Click "Create New Password"</li>
        <li>
          In a few seconds, you will receive a token in your email. (remembering
          that the token expires in 1 hour)
        </li>
        <li>Copy this token and return to the site.</li>
        <li>Just paste the token and reset the password.</li>
      </ol>
    </>
  );
}
