import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../../Redux/Actions";
import { Link } from "react-router-dom";
import "./comics.scss";
import { CircularProgress } from "@mui/material";

const Comics = ({ display }) => {
  const dispatch = useDispatch();
  const comics = useSelector((state) => state.comics);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getComics());
  }, [dispatch]);

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
          {comics?.map((comic) => (
            <div className="comic" key={comic.id}>
              <Link to={`/${comic.id}`}>
                <img src={comic.image.original_url} alt="" className="img" />
              </Link>
              <div className="info">
                <h3 className="name">
                  {comic.name} {comic.issue_number}
                </h3>
                <h5 className="dateAdded">{comic.date_added}</h5>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Comics;
