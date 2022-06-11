import "./comicDetail.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import SimpleDetails from "../../components/details/simpleDetails/SimpleDetails";
import AllDetails from "../../components/details/allDetails/allDetails";

const ComicDetail = () => {
  return (
    <div className="comicDetail">
      <Header />
      {/* <SimpleDetails /> */}
      <AllDetails />
      <Footer />
    </div>
  );
};

export default ComicDetail;
