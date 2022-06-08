const InitialState = {
  comics: [],
};

function rootReducer(state = InitialState, action) {
  switch (action.type) {
    case "GET_COMICS": {
      return {
        ...state,
        comics: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
