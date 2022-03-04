import api from "../../services/api";

export const signInAdmin = (user) => async (dispatch) => {
  dispatch({
    type: "SIGN_IN_ADMIN",
  });

  try {
    const response = await api.post("/admin", user);
    
    const token = await response.data.token;
    if (token) {
      localStorage.setItem("token", token);
    }
    dispatch({
      type: "SIGN_IN_ADMIN_SUCCESS",
      payload: response.data.token,
    });

    window.location.href = "admin/dashboard";
  } catch (error) {
    dispatch({
      type: "SIGN_IN_ADMIN_FAILURE",
      error : error.response.data.error,
    });
  }
};
