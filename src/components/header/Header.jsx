import { Link } from "react-router-dom";
import FavoritesNav from "../favorites/favoritesNav/FavoritesNav";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <FavoritesNav />
      </div>
      <div className="title">
        <Link to="/">
          <span>ComicBook</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
