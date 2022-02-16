const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_AUTH":
      return {
        ...state,
        loading: true,
        error: null,
        isAuthenticated: false,
      };

    case "IS_AUTH_TRUE":
      return {
        ...state,
        loading: false,
        isAuthenticated: action.payload,
      };

    case "IS_AUTH_FALSE":
      return {
        ...state,
        loading: false,
        error: action.error,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
