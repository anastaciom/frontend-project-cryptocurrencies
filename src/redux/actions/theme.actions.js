export const theme = (theme) => (dispatch) => {
  dispatch({
    type: "THEME",
    payload: theme,
  });
};
