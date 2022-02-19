const initialState = {
  data: [],
  loading: false,
  error: null,
  isAuthenticated: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_AUTH":
      return {
        ...state,
        loading: true,
      };

    case "IS_AUTH_TRUE":
      return {
        ...state,
        loading: false,
        data: action.payload,
        isAuthenticated: true
      };

    case "IS_AUTH_FALSE":
      return {
        ...state,
        loading: false,
        error: action.error,
        data: [],
        isAuthenticated: false
      };
    default:
      return state;
  }
};
