import React, { useEffect } from "react";
import "./home.scss";
import Comics from "../../components/comics/Comics";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../../Redux/Actions";

const Home = () => {
  const allComics = useSelector((state) => state.comics);
  const comicsFiltered = useSelector((state) => state.comicsFiltered);
  const comics = comicsFiltered || allComics;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComics());
  }, [dispatch]);

  return (
    <div className="home">
      <Header />
      <Comics comics={comics} />
      <Footer />
    </div>
  );
};

export default Home;
