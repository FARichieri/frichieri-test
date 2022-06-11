import "./favorites.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Comics from "../../components/comics/Comics";
import { useSelector } from "react-redux";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.favorites);

  return (
    <div className="favorites">
      <Header />
      <Comics comics={myFavorites} />
      <Footer />
    </div>
  );
};

export default Favorites;
