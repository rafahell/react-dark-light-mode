export const helperStore = {
  helper: {
    theme: 'light',
  }
};

export const SET_THEME = "SET_THEME";

const helperReducer = (state = helperStore, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        helper: {
          ...state.helper,
          theme: action.payload,
        }
      };
    default:
      return state;
  }
};

export const SetTheme = theme => {
  return {
    type: SET_THEME,
    payload: theme
  };
};

export default helperReducer;