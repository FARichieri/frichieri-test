import "./comics.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../../Redux/Actions";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import PaginationC from "../pagination/Pagination";
import FavoriteBtn from "../favorites/favoriteBtn/FavoriteBtn";
import ListIcon from "@mui/icons-material/List";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import Searchbar from "../searchbar/Searchbar";

const Comics = ({ comics }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const [display, setDisplay] = useState("grid");

  // useEffect(() => {
  //   dispatch(getComics());
  // }, [dispatch]);

  // Pagination Info //
  const currentPage = useSelector((state) => state.currentPage);
  const comicsPerPage = 8;
  const indexLastComic = currentPage * comicsPerPage;
  const indexFirstComic = indexLastComic - comicsPerPage;
  const currentComics =
    comics?.length > 0 ? comics?.slice(indexFirstComic, indexLastComic) : null;
  const totalPages = Math.ceil(comics.length / comicsPerPage);

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
            transform: "translate(-50%,-50%)",
          }}
        />
      ) : (
        <>
          <div className="navBar">
            <h5 className="latestIssues">Latest Issues</h5>
            <Searchbar />
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
          </div>
          {currentComics ? (
            currentComics.map((comic) => (
              <div className="comic" key={comic.id}>
                <Link to={`/comic/${comic.id}`}>
                  <img src={comic.image.original_url} alt="" className="img" />
                </Link>
                <div className="info">
                  <FavoriteBtn id={comic.id} />
                  <h3 className="name">
                    {comic.name ? comic.name : comic.volume.name} #
                    {comic.issue_number}
                  </h3>
                  <h5 className="dateAdded">{comic.date_added}</h5>
                </div>
              </div>
            ))
          ) : (
            <h1>{`Nothing found :(`}</h1>
          )}
          <div className="pagination">
            <PaginationC totalPages={totalPages} />
          </div>
        </>
      )}
    </div>
  );
};

export default Comics;
