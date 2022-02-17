import api from "../../services/api";

export const auth = () => async (dispatch) => {
  dispatch({
    type: "IS_AUTH",
  });

  try {
   const {data} = await api.get("/dashboard");

    dispatch({
      type: "IS_AUTH_TRUE",
      payload: await data,
    });
    
  } catch (error) {
    dispatch({
      type: "IS_AUTH_FALSE",
      error,
    });
  }
};
