import React from "react";
import { useSelector } from "react-redux";
import { CryptoDataStyle } from "./style";
import FavoriteBtn from "./FavoriteBtn";
export default function CryptoData({ searchCrypto }) {
  const state = useSelector((state) => state.auth.data.data);
  const search = state.filter(
    (crypto) =>
      crypto.id.includes(searchCrypto) ||
      crypto.name.includes(searchCrypto) ||
      crypto.symbol.includes(searchCrypto)
  );
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

          {search.map((crypto) => {
            return (
              <tr key={crypto.id}>
                <td>
                  <FavoriteBtn favCrypto={crypto}/>
                  <img src={crypto.image} alt={crypto.id} />
                  <h1>{crypto.name}</h1>
                </td>
                <td>{crypto.symbol}</td>
                <td>
                  {crypto.current_price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>

                <td
                  style={
                    crypto.price_change_percentage_24h < 0
                      ? { color: "red" }
                      : { color: "green" }
                  }
                >
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>
                  {crypto.market_cap.toLocaleString("en-US", {
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
