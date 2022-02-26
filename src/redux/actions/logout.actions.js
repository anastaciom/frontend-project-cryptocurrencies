export const logout = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    localStorage.removeItem("token");
    return (window.location.href = "/");
  }

  dispatch({
    type: "LOGOUT",
    payload: true,
  });
};
