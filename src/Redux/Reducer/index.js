const InitialState = {
  comics: [],
  comicDetail: [],
  loading: false,
};

function rootReducer(state = InitialState, action) {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "GET_COMICS": {
      return {
        ...state,
        comics: action.payload,
        loading: false,
      };
    }
    case "GET_COMIC_DETAIL": {
      return {
        ...state,
        comicDetail: [action.payload],
        loading: false,
      };
    }
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
