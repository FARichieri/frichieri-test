import axios from "axios";

const API_KEY = "45358eaa95df3a711110a654be24192dae31e74f";

export const getComics = () => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    try {
      const json = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issues/?api_key=${API_KEY}&format=json`
      );
      return dispatch({
        type: "GET_COMICS",
        payload: json.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getComicDetail = (id) => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    try {
      const json = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issue/4000-${id}/?api_key=${API_KEY}&format=json`
      );
      return dispatch({
        type: "GET_COMIC_DETAIL",
        payload: json.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
