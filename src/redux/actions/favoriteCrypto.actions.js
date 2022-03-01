export const addFavoriteCrypto = (crypto) => (dispatch) => {
  dispatch({
    type: "ADD_FAVORITES",
    payload: crypto,
  });
};
export const removeFavoriteCrypto = (crypto) => (dispatch) => {
  dispatch({
    type: "REMOVE_FAVORITES",
    payload: crypto,
  });
};

