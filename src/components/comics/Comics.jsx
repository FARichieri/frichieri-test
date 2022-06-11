import "./comics.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import PaginationC from "../pagination/Pagination";
import FavoriteBtn from "../favorites/favoriteBtn/FavoriteBtn";
import ListIcon from "@mui/icons-material/List";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import Searchbar from "../searchbar/Searchbar";
import nothingFound from "../../images/nothingFound.png";

const Comics = ({ comics }) => {
  const loading = useSelector((state) => state.loading);
  const [display, setDisplay] = useState("grid");

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  };

  // Pagination Info //
  const currentPage = useSelector((state) => state.currentPage);
  const comicsPerPage = 8;
  const indexLastComic = currentPage * comicsPerPage;
  const indexFirstComic = indexLastComic - comicsPerPage;
  const currentComics =
    comics?.length > 0 ? comics?.slice(indexFirstComic, indexLastComic) : null;
  const totalPages = Math.ceil(comics.length / comicsPerPage);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 540;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    width < breakpoint && setDisplay("grid");
  }, [width]);

  return (
    <div className={`comics ${display}`}>
      {loading ? (
        <CircularProgress
          className="loader"
          color="inherit"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            margin: "auto",
          }}
        />
      ) : (
        <>
          <div className="navBar">
            <h5 className="latestIssues">Latest Issues</h5>
            <Searchbar comics={comics} />
            {width > breakpoint && (
              <div className="showMods">
                <div className={display === "list" ? "active" : "list"}>
                  <ListIcon
                    onClick={() => setDisplay("list")}
                    className={`icon`}
                  />
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
            )}
          </div>
          {currentComics ? (
            currentComics.map((comic) => (
              <div className="comic" key={comic.id}>
                <Link to={`/comic/${comic.id}`}>
                  <img
                    src={comic.image.original_url}
                    alt=""
                    className="comicImg"
                  />
                  <div className="goDetail">Details</div>
                </Link>
                <div className="info">
                  <FavoriteBtn comic={comic} />
                  <h3 className="name">
                    {comic.volume.name || comic.name} #{comic.issue_number}
                  </h3>
                  <h5 className="dateAdded">{formatDate(comic.date_added)}</h5>
                </div>
              </div>
            ))
          ) : (
            <div className="nothingFound">
              <span>Nothing found</span>
              <img src={nothingFound} alt="" />
            </div>
          )}
          {currentComics && (
            <div className="pagination">
              <PaginationC totalPages={totalPages} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Comics;
