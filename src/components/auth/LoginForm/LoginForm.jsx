import { useState } from "react";
import "./loginForm.scss";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Redux/Actions";
import swal from "sweetalert";

const LoginForm = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [register, setRegister] = useState(false);
  const currentUser = useSelector((state) => state.currentUser);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(login(user));
        swal({
          title: "you have successfully logged in!",
          icon: "success",
          button: "OK!",
        });
        navigate("/");
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
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch(login(user));
        swal({
          title: "you have registered and logged in successfully!",
          icon: "success",
          button: "OK!",
        });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  return (
    <div className="loginContainer">
      {!currentUser ? (
        <>
          {!register ? (
            <>
              <div className="infoLogin">
                Please <span className="highlight">login</span> to see your
                favorite comics!
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
                {error && (
                  <span className="error">Wrogn email or password!</span>
                )}
              </form>
              <div className="recomendation">
                If you are not registered, please{" "}
                <button
                  className="changeForm"
                  onClick={() => setRegister(true)}
                >
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
                {error && (
                  <span className="error">Wrogn email or password!</span>
                )}
              </form>
              <div className="recomendation">
                If you are already registered, please{" "}
                <button
                  className="changeForm"
                  onClick={() => setRegister(false)}
                >
                  Login
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <h1>You are already logged</h1>
      )}
    </div>
  );
};

export default LoginForm;
