const initialState = {
    userToken: '',
    loading: false,
    error: null,
  };
  
  export const signInAdminReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGN_IN_ADMIN":
        return {
          ...state,
          loading: true,
        };
  
      case "SIGN_IN_ADMIN_SUCCESS":
        return {
          ...state,
          loading: false,
          userToken: action.payload,
        };
  
      case "SIGN_IN_ADMIN_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.error,
          userToken: '',
        };
      default:
        return state;
    }
  };