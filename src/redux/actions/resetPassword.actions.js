import api from "../../services/api";

export const resetPassword = (user) => async (dispatch) => {
  dispatch({
    type: "RECEIVE_NEW_PASSWORD",  
  });

  try {
    const response = await api.post("/signin/reset_password", user);

    dispatch({
      type: "RECEIVE_NEW_PASSWORD_SUCCESS",
      payload: response.data.status,
    });
    
    window.location.href = "/signin/";

  } catch (error) {
    dispatch({
      type: "RECEIVE_NEW_PASSWORD_FAILURE",
      error : error.response.data.error,
    });
  }
};
