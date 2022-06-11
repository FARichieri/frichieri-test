import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./allDetails.scss";
import { CircularProgress } from "@mui/material";
import { getComicDetail } from "../../../Redux/Actions";

const AllDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const comicDetail = useSelector((state) => state.comicDetail);

  // useEffect(() => {
  //   dispatch(getComicDetail(id));
  // }, [dispatch]);

  return (
    <div className="comicDetail">
      {loading ? (
        <CircularProgress
          color="inherit"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      ) : (
        <div>
          {comicDetail?.map((detail) => (
            <div className="detailContainer" key={detail.id}>
              <div className="info">
                <div className="infoSection">
                  <h1 className="title">Characters</h1>
                  <div className="subInfoContainer">
                    {detail[1]?.map((credit) => (
                      <div className="subInfo" key={credit.id}>
                        <div className="infoMapped">
                          <a href={credit.site_detail_url} target="_blank">
                            <img
                              className="subImg"
                              src={credit.icon_url}
                              alt="character"
                            />
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
                    {detail[2]?.map((team) => (
                      <div className="subInfo" key={team.id}>
                        <div className="infoMapped">
                          <a href={team.site_detail_url} target="_blank">
                            <img
                              className="subImg"
                              src={team.icon_url}
                              alt="team"
                            />
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
                    {detail[3]?.map((location) => (
                      <div className="subInfo" key={location.id}>
                        <div className="infoMapped">
                          <a href={location.site_detail_url} target="_blank">
                            <img
                              className="subImg"
                              src={location.icon_url}
                              alt=""
                            />
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
                    {detail[4]?.map((concept) => (
                      <div className="subInfo" key={concept.id}>
                        <div className="infoMapped">
                          <a href={concept.site_detail_url} target="_blank">
                            <img
                              className="subImg"
                              src={concept.icon_url}
                              alt=""
                            />
                            <span>{concept.name}</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <img className="detailImg" src={detail[0]} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllDetails;
