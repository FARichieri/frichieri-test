import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({ back }) => {
  return (
    <div className="header">
      <Link to="/">
        <span className="title">ComicBook</span>
      </Link>
    </div>
  );
};

export default Header;
