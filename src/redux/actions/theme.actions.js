export const theme = (theme) => async (dispatch) => { 
    dispatch({
      type: "THEME",
      payload: theme,
    });
  
  };
  