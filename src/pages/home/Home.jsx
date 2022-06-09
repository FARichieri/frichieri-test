import React, { useState } from "react";
import "./home.scss";
import Comics from "../../components/comics/Comics";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ListIcon from "@mui/icons-material/List";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import Searchbar from "../../components/searchbar/Searchbar";

const Home = () => {
  const [display, setDisplay] = useState("list");

  return (
    <div className="home">
      <Header />
      <div className="navBar">
        <h5 className="latestIssues">Latest Issues</h5>
        <Searchbar />
        <div className="showMods">
          <div className={display === "list" ? "active" : "list"}>
            <ListIcon onClick={() => setDisplay("list")} className={`icon`} />
            List
          </div>
          <div className={display === "grid" ? "active" : "grid"}>
            <ViewComfyIcon
              onClick={() => setDisplay("grid")}
              className={`icon`}
            />
            Grid
          </div>
        </div>
      </div>
      <div className="comics">
        <Comics display={display} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
