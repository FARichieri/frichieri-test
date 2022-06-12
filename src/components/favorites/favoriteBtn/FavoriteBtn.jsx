import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addFavorite, deleteFavorite } from "../../../Redux/Actions";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import swal from "sweetalert";
import "./favoriteBtn.scss";
import fav from "../../../images/fav.png";
import noFav from "../../../images/noFav.png";

const FavoriteBtn = ({ comic }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  let myFavorites = useSelector((state) => state.favorites);
  let isFav;
  myFavorites?.find((e) =>
    e.id === comic.id ? (isFav = true) : (isFav = false)
  );
  const [favorite, setFavorite] = useState(isFav);

  const handleFavorite = () => {
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
          dispatch(deleteFavorite(comic.id));
          setFavorite(false);
          const favRef = doc(db, "favorites", currentUser.uid); // Probar
          updateDoc(favRef, {
            favorites: arrayRemove(comic),
          });
        }
      });
    } else if (!favorite) {
      if (!currentUser) {
        swal({
          title: "Please log in to add comics to favorites!",
          icon: "warning",
          button: "OK!",
        });
      } else {
        swal({
          title: "Comic added to favorites!",
          icon: "success",
          button: "OK!",
        });
        dispatch(addFavorite(comic.id));
        setFavorite(true);
        const favRef = doc(db, "favorites", currentUser.uid);
        updateDoc(favRef, {
          favorites: arrayUnion(comic),
        });
      }
    }
  };

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
