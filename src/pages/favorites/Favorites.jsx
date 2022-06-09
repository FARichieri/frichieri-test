import "./favorites.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Comics from "../../components/comics/Comics";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFavorites } from "../../Redux/Actions";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);
  return (
    <div className="favorites">
      <Header />
      <Comics comics={myFavorites} />
      <Footer />
    </div>
  );
};

export default Favorites;
