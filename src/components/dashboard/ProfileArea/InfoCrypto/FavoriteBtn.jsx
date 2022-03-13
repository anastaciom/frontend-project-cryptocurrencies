import React, { useEffect, useState } from "react";
import { StarBorder, Star } from "@mui/icons-material/";
import { FavoriteBtnStyle } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteCrypto, removeFavoriteCrypto } from "../../../../redux/actions/favoriteCrypto.actions";

export default function FavoriteBtn({ favCrypto }) {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const { favorites } = useSelector((state) => state.favorites);

  const checkFavorites = [...favorites].find(
    (item) => item.id === favCrypto.id
  );
  
  useEffect(() => {
    if (checkFavorites) {
      return setFavorite(true);
    }
    return setFavorite(false);
  }, [checkFavorites]);

  function handleFavorite() {
    if (favorite === false) {
      setFavorite(true);
      return dispatch(addFavoriteCrypto(favCrypto));
    }
    setFavorite(false);
    return dispatch(removeFavoriteCrypto(favCrypto));
  }

  return (
    <FavoriteBtnStyle onClick={handleFavorite}>
      {favorite ? (
        <Star
          style={{
            color: "yellow",
          }}
        />
      ) : (
        <StarBorder/>
      )}
    </FavoriteBtnStyle>
  );
}
