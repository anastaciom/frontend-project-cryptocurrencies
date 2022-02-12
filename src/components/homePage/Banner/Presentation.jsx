import React from "react";
import { Link } from "react-router-dom";
export default function Presentation() {
  return (
    <div>
      <h1>CryptoDash</h1>
      <p>
        Your favorite platform to view information for all cryptocurrencies.
        Still don't know our platform? So don't waste time, click "Get Started"
        and register now.
      </p>
      <Link to="/signup">Get Started</Link>
    </div>
  );
}
