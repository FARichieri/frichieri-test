import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../../Redux/Actions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./comics.scss";

const Comics = () => {
  const dispatch = useDispatch();
  const comics = useSelector((state) => state.comics);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getComics());
  }, [dispatch]);

  return (
    <div className="comics">
      {!comics ? (
        "Loading"
      ) : (
        <>
          {comics?.map((comic) => (
            <div className="comic" key={comic.id}>
              <Link to="/asd">
                <img src={comic.image.original_url} alt="" className="img" />
              </Link>
              <h3 className="name">
                {comic.name} {comic.issue_number}
              </h3>
              <h5 className="dateAdded">{comic.date_added}</h5>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Comics;
