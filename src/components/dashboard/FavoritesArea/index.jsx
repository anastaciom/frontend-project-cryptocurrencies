import React from "react";
import { FavoriteAreaStyle } from "./style";
import Title from "./Title";
import Header from "./Header";
import InfoFavoriteCrypto from "./InfoFavoriteCrypto";
export default function FavoritesArea() {
  return (
    <FavoriteAreaStyle>
      <Header />
      <Title />
      <InfoFavoriteCrypto />
    </FavoriteAreaStyle>
  );
}
