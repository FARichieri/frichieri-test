import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import error404 from "../../images/404.jpg";
import "./notFound404.scss";

const NotFound404 = () => {
  return (
    <div className="notFound404">
      <Header />
      <img src={error404} alt="" className="imgNotFound" />
      <Footer />
    </div>
  );
};

export default NotFound404;
