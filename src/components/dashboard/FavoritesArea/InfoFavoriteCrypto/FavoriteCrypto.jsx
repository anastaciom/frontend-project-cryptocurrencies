import React from "react";
import { useSelector } from "react-redux";
import { FavoriteCryptoStyle,  EmptyFavoritesStyle} from "./style";
export default function FavoriteCrypto() {
  const { favorites } = useSelector((state) => state.favorites);
 
  return (
    <FavoriteCryptoStyle>
      {favorites.length === 0 ? (
        <EmptyFavoritesStyle>Empty favorites...</EmptyFavoritesStyle>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>Token</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>24H</th>
              <th>Market Cap</th>
            </tr>

            {favorites.map((crypto) => (
              <tr key={crypto.id}>
                <td>
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
            ))}
          </tbody>
        </table>
      )}
    </FavoriteCryptoStyle>
  );
}
