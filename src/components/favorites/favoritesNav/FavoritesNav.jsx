import "./favoritesNav.scss";
import favIcon from "../../../images/fav.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FavoritesNav = () => {
  const myFavorites = useSelector((state) => state.favorites);
  // console.log(myFavorites);
  useEffect(() => {}, [myFavorites]);

  return (
    <div className="favoritesNav">
      <div className="favContainer">
        {myFavorites.length > 0 && (
          <div className="favCounter">{Number(myFavorites.length)}</div>
        )}
        <Link to="/favorites">
          <img src={favIcon} alt="" className="favIcon" />
        </Link>
      </div>
    </div>
  );
};

export default FavoritesNav;
