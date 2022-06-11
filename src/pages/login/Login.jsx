import "./login.scss";
import Header from "../../components/header/Header";
import LoginForm from "../../components/auth/LoginForm/LoginForm";
import Footer from "../../components/footer/Footer";

const Login = () => {
  return (
    <div className="loginPage">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
