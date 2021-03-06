import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { CircularProgress } from "@mui/material";
import { getSimpleDetails } from "../../../Redux/Actions";
import "./simpleDetails.scss";

const SimpleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const comicDetail = useSelector((state) => state.comicDetail);

  useEffect(() => {
    dispatch(getSimpleDetails(id));
  }, [dispatch, id]);

  return (
    <div className="comicDetail">
      {loading ? (
        <CircularProgress
          color="inherit"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      ) : (
        <div className="detail">
          {comicDetail?.map((detail) => (
            <div className="detailContainer" key={detail.id}>
              <div className="info">
                <div className="infoSection">
                  <h1 className="title">Characters</h1>
                  <div className="subInfoContainer">
                    {detail.character_credits.map((credit) => (
                      <div className="subInfo" key={credit.id}>
                        <div className="infoMapped">
                          <a
                            href={credit.site_detail_url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>{credit.name}</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="infoSection">
                  <h1 className="title">Teams</h1>
                  <div className="subInfoContainer">
                    {detail.team_credits.map((team) => (
                      <div className="subInfo" key={team.id}>
                        <div className="infoMapped">
                          <a
                            href={team.site_detail_url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>{team.name}</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="infoSection">
                  <h1 className="title">Locations</h1>
                  <div className="subInfoContainer">
                    {detail.location_credits.map((location) => (
                      <div className="subInfo" key={location.id}>
                        <div className="infoMapped">
                          <a
                            href={location.site_detail_url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>{location.name}</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="infoSection">
                  <h1 className="title">Concepts</h1>
                  <div className="subInfoContainer">
                    {detail.concept_credits.map((concept) => (
                      <div className="subInfo" key={concept.id}>
                        <div className="infoMapped">
                          <a
                            href={concept.site_detail_url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>{concept.name}</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <img
                className="detailImg"
                src={detail.image.original_url}
                alt=""
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SimpleDetails;
