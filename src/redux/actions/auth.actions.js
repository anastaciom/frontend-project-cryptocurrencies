import api from "../../services/api";

export const auth = () => async (dispatch) => {
  dispatch({
    type: "IS_AUTH",
  });

  try {
    await api.get("/dashboard");

    dispatch({
      type: "IS_AUTH_TRUE",
      payload: true,
    });
  } catch (error) {
    dispatch({
      type: "IS_AUTH_FALSE",
      error,
    });
  }
};
