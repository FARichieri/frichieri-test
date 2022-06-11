const InitialState = {
  comics: JSON.parse(localStorage.getItem("comics"))?.data.results || [],
  comicsFiltered: [],
  comicDetail: [],
  favorites: [],
  currentUser: null,
  loading: false,
  error: null,
  currentPage: 1,
};

function rootReducer(state = InitialState, action) {
  switch (action.type) {
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
      myFavorites.push(myNewComic);
      return {
        ...state,
        favorites: myFavorites,
      };
    case "DELETE_FAVORITE":
      let myFavorites2 = state.favorites;
      myFavorites2 = myFavorites2.filter(
        (comic) => comic.id !== action.payload
      );
      return {
        ...state,
        favorites: myFavorites2,
      };
    case "GET_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
        loading: false,
      };
    case "LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "ERROR": {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case "CLOSE_ERROR": {
      return {
        ...state,
        error: null,
        loading: false,
      };
    }
    case "LOGIN":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        currentUser: null,
        favorites: [],
      };
    case "SEARCH_BY_NAME":
      console.log(action.payload);
      const comics = state.comics;
      let matched = comics.filter((comic) =>
        (comic.volume.name || comic.name).toLowerCase().includes(action.payload)
      );
      return {
        ...state,
        comicsFiltered: matched,
        currentPage: 1,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
