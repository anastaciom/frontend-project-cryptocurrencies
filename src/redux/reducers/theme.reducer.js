const persistedTheme = localStorage.getItem("theme");

const initialState = {
  theme: persistedTheme ? JSON.parse(persistedTheme) : "light",
}

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEME":
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};
