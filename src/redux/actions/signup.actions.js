import api from "../../services/api";

export const signUp = (user) => async (dispatch, getState) => {
  dispatch({
    type: "SIGN_UP",
  });

  try {
    const response = await api.post("/signup", user);

    const token = await response.data.token;
    if (token) {
      localStorage.setItem("token", token);
    }
    dispatch({
      type: "FETCH_USER_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_USER_FAILURE",
      error,
    });
  }
};
