import api from "../../services/api";

export const authAdmin = () => async (dispatch) => {
  dispatch({
    type: "IS_ADMIN",
  });

  try {
   const {data} = await api.get("/admin/users");

    dispatch({
      type: "IS_ADMIN_TRUE",
      payload: await data,
    });
    
  } catch (error) {
    dispatch({
      type: "IS_ADMIN_FALSE",
      error : error.response.data.error,
    });
  }
};
