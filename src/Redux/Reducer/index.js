const InitialState = {
  comics: [],
  comicDetail: [],
  loading: false,
  currentPage: 1,
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
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
