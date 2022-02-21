const initialState = {
    loading: false,
    error: null,
    status: ''
  };
  
  export const forgotPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SEND_TOKEN":
        return {
          ...state,
          loading: true,
        };
  
      case "SEND_TOKEN_SUCCESS":
        return {
          ...state,
          loading: false,
          status: action.payload,
        };
  
      case "SEND_TOKEN_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.error,
          status: '',
        };
      default:
        return state;
    }
  };
  