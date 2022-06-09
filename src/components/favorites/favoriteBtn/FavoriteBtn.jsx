import "./favoriteBtn.scss";
import fav from "../../../images/fav.png";
import noFav from "../../../images/noFav.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addFavorite,
  deleteFavorite,
  getFavorites,
} from "../../../Redux/Actions";
import swal from "sweetalert";

const FavoriteBtn = ({ id }) => {
  const dispatch = useDispatch();
  let myFavorites = useSelector((state) => state.favorites);
  let isFav;
  myFavorites?.find((e) => (e.id === id ? (isFav = true) : (isFav = false)));
  const [favorite, setFavorite] = useState(isFav);
  // let whatIs;
  // myFavorites?.find((e) => (e.id == id ? (whatIs = true) : (whatIs = false)));
  // const [favorite, setFavorite] = useState(whatIs);
  // console.log(id, favorite);

  function handleFavorite() {
    if (favorite === true) {
      swal({
        title: "Do you want to remove this comic from favorites?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Comic removed from favorites", {
            icon: "success",
          });
          dispatch(deleteFavorite(id));
          setFavorite(false);
        }
      });
    } else if (!favorite) {
      swal({
        title: "Comic added to favorites!",
        icon: "success",
        button: "OK!",
      });
      dispatch(addFavorite(id));
      setFavorite(true);
    }
  }

  return (
    <div className="favoriteBtn">
      {favorite ? (
        <img
          src={fav}
          alt=""
          className="fav"
          onClick={() => handleFavorite()}
        />
      ) : (
        <img
          src={noFav}
          alt=""
          className="noFav"
          onClick={() => handleFavorite()}
        />
      )}
    </div>
  );
};

export default FavoriteBtn;
