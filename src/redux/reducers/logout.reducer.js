const initialState = {
  logout: false,
};

export const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGOUT":
      return {
        ...state,
        logout: action.payload,
      };
    default:
      return state;
  }
};
