import React from "react";
import { useSelector } from "react-redux";
import { CryptoDataStyle } from "./style";
import { StarBorder } from "@mui/icons-material/";
export default function CryptoData() {
  const state = useSelector((state) => state.auth.data.data);

  return (
    <CryptoDataStyle>
      <table>
        <tbody>
          <tr>
            <th>Token</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>24H</th>
            <th>Market Cap</th>
          </tr>
          {state.map((cripto) => {
            return (
              <tr key={cripto.id}>
                <td>
                  <StarBorder style={{float: 'left', margin: 10, fontSize: 30, cursor: "pointer"}}/>
                  <img src={cripto.image} alt={cripto.id} />
                  <h1>{cripto.name}</h1>
                </td>
                <td>{cripto.symbol}</td>
                <td>
                  {cripto.current_price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>

                <td
                  style={
                    cripto.price_change_percentage_24h < 0
                      ? { color: "red" }
                      : { color: "green" }
                  }
                >
                  {cripto.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>
                  {cripto.market_cap.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </CryptoDataStyle>
  );
}
