const initialState = {
  loading: false,
  error: null,
  status: "",
};

export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_NEW_PASSWORD":
      return {
        ...state,
        loading: true,
      };

    case "RECEIVE_NEW_PASSWORD_SUCCESS":
      return {
        ...state,
        loading: false,
        status: action.payload,
      };

    case "RECEIVE_NEW_PASSWORD_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
        status: "",
      };
    default:
      return state;
  }
};
