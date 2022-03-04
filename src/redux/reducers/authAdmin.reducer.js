const initialState = {
    users: [],
    loading: false,
    error: null,
    isAdmin: false
  };
  
  export const authAdminReducer = (state = initialState, action) => {
    switch (action.type) {
      case "IS_ADMIN":
        return {
          ...state,
          loading: true,
        };
  
      case "IS_ADMIN_TRUE":
        return {
          ...state,
          loading: false,
          users: action.payload,
          isAdmin: true
        };
  
      case "IS_ADMIN_FALSE":
        return {
          ...state,
          loading: false,
          error: action.error,
          users: [],
          isAdmin: false
        };
      default:
        return state;
    }
  };
  