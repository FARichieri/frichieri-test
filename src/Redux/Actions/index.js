import axios from "axios";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const API_KEY = "45358eaa95df3a711110a654be24192dae31e74f";

export const getComics = () => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    try {
      // const json = await axios.get(
      //   `https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issues/?api_key=${API_KEY}&format=json`
      // );
      // json.data.results && localStorage.setItem("comics", JSON.stringify(json));
      return dispatch({
        type: "GET_COMICS",
        payload:
          // json.data.results ||
          JSON.parse(localStorage.getItem("comics")).data.results,
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
      const detail = [];
      const infoCharacterComic = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issue/4000-${id}/?api_key=${API_KEY}&format=json`
      );
      const getImg = (comicImg) => {
        return comicImg;
      };
      const getExtraInfo = async (extraInfo) => {
        const extraInfoObj = extraInfo.map((info) => {
          let obj = {
            name: info.name,
            id: info.id,
            api_detail_url: info.api_detail_url,
          };
          return obj;
        });
        for (let i = 0; i < extraInfoObj.length; i++) {
          let characterImages = await axios.get(
            `https://cors-anywhere.herokuapp.com/${extraInfoObj[i].api_detail_url}?api_key=${API_KEY}&format=json`
          );
          extraInfoObj[i].icon_url =
            characterImages.data.results.image.icon_url;
        }
        return extraInfoObj;
      };
      Promise.all([
        getImg(infoCharacterComic.data.results.image.original_url),
        getExtraInfo(infoCharacterComic.data.results.character_credits),
        getExtraInfo(infoCharacterComic.data.results.location_credits),
        getExtraInfo(infoCharacterComic.data.results.team_credits),
        getExtraInfo(infoCharacterComic.data.results.concept_credits),
      ]).then((result) => detail.push(result));
      console.log(detail);
      return {
        type: "GET_COMIC_DETAIL",
        payload: detail,
      };
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCurrentPage = (payload) => {
  try {
    return {
      type: "SET_CURRENT_PAGE",
      payload: payload,
    };
  } catch (error) {
    console.log(error);
  }
};

export const addFavorite = (id) => {
  try {
    return {
      type: "ADD_FAVORITE",
      payload: id,
    };
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavorite = (id) => {
  try {
    return {
      type: "DELETE_FAVORITE",
      payload: id,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getFavorites = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "LOADING" });
      const docRef = doc(db, "favorites", id);
      const docSnap = await getDoc(docRef);
      return dispatch({
        type: "GET_FAVORITES",
        payload: docSnap.data().favorites,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (user) => {
  try {
    return {
      type: "LOGIN",
      payload: user,
    };
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  try {
    return {
      type: "LOGOUT",
    };
  } catch (error) {
    console.log(error);
  }
};
