import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getFavorites, login } from "../../../Redux/Actions";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import swal from "sweetalert";
import "./loginForm.scss";

const LoginForm = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(getFavorites(user.uid));
        dispatch(login(user));
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
        swal({
          title: "you have successfully logged in!",
          icon: "success",
          button: "OK!",
        });
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(login(user));
        swal({
          title: "you have registered and logged in successfully!",
          icon: "success",
          button: "OK!",
        });
        setDoc(doc(db, "favorites", user.uid), {
          favorites: [],
        });
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  return (
    <div className="loginContainer">
      {!register ? (
        <>
          <div className="infoLogin">
            Please <span className="highlight">login</span> to see your favorite
            comics!
          </div>
          <form onSubmit={handleLogin}>
            <input
              className="formInput"
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="formInput"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="logSubmit">
              Login
            </button>
            {error && <span className="error">Wrogn email or password!</span>}
          </form>
          <div className="recomendation">
            I don't have account{" "}
            <button className="changeForm" onClick={() => setRegister(true)}>
              Register
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="infoLogin">
            Please <span className="highlight">register</span> to see your
            favorite comics!
          </div>
          <form onSubmit={handleRegister}>
            <input
              className="formInput"
              type="email"
              placeholder="new email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="formInput"
              type="password"
              placeholder="new password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="logSubmit">
              Register
            </button>
            {error && <span className="error">Wrogn email or password!</span>}
          </form>
          <div className="recomendation">
            I have an account
            <button className="changeForm" onClick={() => setRegister(false)}>
              Login
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginForm;
