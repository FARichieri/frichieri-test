const InitialState = {
  comics: [],
  comicDetail: [],
  favorites: [],
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
    case "ADD_FAVORITE":
      let myComics = state.comics;
      let myFavorites = state.favorites;
      let myNewComic = myComics.find((comic) => comic.id === action.payload);
      myFavorites.unshift(myNewComic);
      return {
        ...state,
        favorites: myFavorites,
      };
    case "DELETE_FAVORITE":
      let myFavorites2 = state.favorites;
      myFavorites2 = myFavorites2.filter(
        (comic) => comic[0].id !== action.payload
      );
      return {
        ...state,
        favorites: myFavorites2,
      };
    case "GET_FAVORITES":
      return {
        ...state,
        favorites: state.favorites,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
