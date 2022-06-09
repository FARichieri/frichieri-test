import { useState } from "react";
import "./loginForm.scss";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/Actions";

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
        // Signed in
        const user = userCredential.user;
        dispatch(login(user));
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
          <button className="changeForm" onClick={() => setRegister(true)}>
            Register
          </button>
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
          <button className="changeForm" onClick={() => setRegister(false)}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default LoginForm;
