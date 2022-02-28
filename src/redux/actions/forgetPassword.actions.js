import api from "../../services/api";

export const forgetPassword = (email) => async (dispatch) => {
  dispatch({
    type: "SEND_TOKEN",
  });

  try {
    const response = await api.post("/signin/forgot_password", email);

    dispatch({
      type: "SEND_TOKEN_SUCCESS",
      payload: response.data.status,
    });

    window.location.href = "/signin/reset_password";
    
  } catch (error) {
    dispatch({
      type: "SEND_TOKEN_FAILURE",
      error: error.response.data.error,
    });
  }
};
