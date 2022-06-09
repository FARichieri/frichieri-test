import "./favoritesNav.scss";
import favIcon from "../../../images/fav.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFavorites } from "../../../Redux/Actions";

const FavoritesNav = () => {
  const myFavorites = useSelector((state) => state.favorites.length);
  console.log(myFavorites);

  useEffect(() => {}, [myFavorites]);

  return (
    <div className="favoritesNav">
      <div className="favContainer">
        {myFavorites > 0 && (
          <div className="favCounter">{myFavorites.toString()}</div>
        )}
        <Link to="/favorites">
          <img src={favIcon} alt="" className="favIcon" />
        </Link>
      </div>
    </div>
  );
};

export default FavoritesNav;
