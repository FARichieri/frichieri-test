import "./footer.scss";
import logo from "../../images/comic.png";

const Footer = () => {
  return (
    <div className="footer reveal">
      <img className="logo" src={logo} alt="" />
      <a
        href="https://github.com/FARichieri/frichieri-test"
        target="_blank"
        className="github "
        rel="noreferrer"
      >
        Copyright © 2022 ComicBook
      </a>
    </div>
  );
};

export default Footer;
