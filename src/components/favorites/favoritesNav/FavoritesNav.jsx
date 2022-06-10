import "./favoritesNav.scss";
import favIcon from "../../../images/fav.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFavorites } from "../../../Redux/Actions";

const FavoritesNav = () => {
  const myFavorites = useSelector((state) => state.favorites.length);
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    currentUser && dispatch(getFavorites(currentUser.uid));
  }, [currentUser]);

  return (
    <div className="favoritesNav">
      <div className="favContainer">
        <Link to="/favorites">
          {myFavorites > 0 && (
            <div className="favCounter">{myFavorites.toString()}</div>
          )}
          <img src={favIcon} alt="" className="favIcon" />
        </Link>
      </div>
    </div>
  );
};

export default FavoritesNav;
