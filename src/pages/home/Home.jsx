import React from "react";
import "./home.scss";
import Comics from "../../components/comics/Comics";

const Home = () => {
  return (
    <div className="home">
      <div className="header">ComicBook</div>
      <div className="navBar">
        <h5 className="latestIssues">Latest Issues</h5>
        <div className="showMods">
          <div className="List">List</div>
          <div className="Grid">Grid</div>
        </div>
      </div>
      <div className="comics">
        <Comics />
      </div>
    </div>
  );
};

export default Home;
