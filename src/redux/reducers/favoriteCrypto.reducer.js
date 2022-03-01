const initialState = {
  favorites: [],
};

export const favoriteCryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case "REMOVE_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites].filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
