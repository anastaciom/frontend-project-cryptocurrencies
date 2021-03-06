import api from "../../services/api";

export const signIn = (user) => async (dispatch) => {
  dispatch({
    type: "SIGN_IN",
  });

  try {
    const response = await api.post("/signin", user);
    
    const token = await response.data.token;
    if (token) {
      localStorage.setItem("token", token);
    }
    dispatch({
      type: "FETCH_USER_SUCCESS",
      payload: response.data.token,
    });

    window.location.href = "/dashboard/profile";
  } catch (error) {
    dispatch({
      type: "FETCH_USER_FAILURE",
      error : error.response.data.error,
    });
  }
};
