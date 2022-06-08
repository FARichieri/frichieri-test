import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getComicDetail } from "../../Redux/Actions";
import "./comicDetail.scss";
import { CircularProgress } from "@mui/material";
import Header from "../../components/navBar/Header";
import Footer from "../../components/footer/Footer";

const ComicDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const comicDetail = useSelector((state) => state.comicDetail);

  useEffect(() => {
    dispatch(getComicDetail(id));
    try {
    } catch (error) {}
  }, [dispatch]);

  return (
    <div className="comicDetail">
      <Header />
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
                <div className="characters">
                  <h1 className="title">Characters</h1>
                  <div className="charactersCredits">
                    {detail.character_credits.map((credit) => (
                      <div className="credits">
                        <div className="div">{credit.name}</div>
                        <div className="div">
                          {credit.api_detail_url + credit.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <img
                className="img"
                src={detail.associated_images[0].original_url}
                alt=""
              />
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ComicDetail;
