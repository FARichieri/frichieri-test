import axios from "axios";
import { useState } from "react";

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
        getImg(
          infoCharacterComic.data.results.associated_images[0].original_url
        ),
        getExtraInfo(infoCharacterComic.data.results.character_credits),
        getExtraInfo(infoCharacterComic.data.results.location_credits),
        getExtraInfo(infoCharacterComic.data.results.team_credits),
        getExtraInfo(infoCharacterComic.data.results.concept_credits),
      ]).then((result) => detail.push(result));
      return {
        type: "GET_COMIC_DETAIL",
        payload: detail,
      };
    } catch (error) {
      console.log(error);
    }
  };
};

// getExtraInfo(infoCharacterComic.data.results.character_credits);
// getExtraInfo(infoCharacterComic.data.results.location_credits);
// getExtraInfo(infoCharacterComic.data.results.team_credits);
// console.log(getExtraInfo(location_credits));
// console.log(getExtraInfo(team_credits));
// console.log(getExtraInfo(team_credits));
// console.log(getExtraInfo(concept_credits));

/*start Character */
// const characterObj = infoCharacterComic.data.results.character_credits.map((character) => {
//     let obj = {
//       name: character.name,
//       id: character.id,
//       api_detail_url: character.api_detail_url,
//     };
//     return obj;
//   });

// for (let i = 0; i < characterObj.length; i++) {
//   let characterImages = await axios.get(
//     `https://cors-anywhere.herokuapp.com/${characterObj[i].api_detail_url}?api_key=${API_KEY}&format=json`
//   );

//   characterObj[i].icon_url = characterImages.data.results.image.icon_url;
// }
// objRetorno.character = characterObj;
// /*end Character || start Location */
// const locationObj = infoCharacterComic.data.results.location_credits.map(locations =>{
//   let obj = {
//     name: locations.name,
//     id: locations.id,
//     api_detail_url: locations.api_detail_url,
//   }
//   return obj
// });
// for(let i = 0; i < locationObj.length; i++){
//   let locationImages = await axios.get(`https://cors-anywhere.herokuapp.com/${locationObj[i].api_detail_url}?api_key=${API_KEY}&format=json`)

//   locationObj[i].icon_url = locationImages.data.results.image.icon_url
// }
// objRetorno.location = locationObj;

// /* end Location */
// console.log(objRetorno);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const getComicDetail = (id) => {
//   return async (dispatch) => {
//     dispatch({ type: "LOADING" });
//     try {
//       const json = await axios.get(
//         `https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issue/4000-${id}/?api_key=${API_KEY}&format=json`
//       );
//       return dispatch({
//         type: "GET_COMIC_DETAIL",
//         payload: json.data.results,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

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

export const getFavorites = () => {
  try {
    return {
      type: "GET_FAVORITES",
    };
  } catch (error) {
    console.log(error);
  }
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
