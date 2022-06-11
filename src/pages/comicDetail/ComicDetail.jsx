import "./comicDetail.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SimpleDetails from "../../components/details/simpleDetails/SimpleDetails";
// import AllDetails from "../../components/details/allDetails/allDetails";

// There are 2 details (AllDetails and SimpleDetails) because one contains images of subcategories and the other only the text.
// (That's because of the limit of api requests. To fetch images, we require to enter in other endpoint inside the subcategory,
// which results in too much requests for our limit per hour given.)

const ComicDetail = () => {
  return (
    <div className="comicDetail">
      <Header />
      <SimpleDetails />
      {/* <AllDetails /> */}
      <Footer />
    </div>
  );
};

export default ComicDetail;
