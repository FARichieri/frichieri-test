import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComicDetail from "./pages/comicDetail/ComicDetail";
import Favorites from "./pages/favorites/Favorites";
import NotFound404 from "./pages/notFound404/NotFound404";
import { Navigate } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./Redux/Actions";
import Login from './pages/login/Login'

function App() {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  const RequireAuth = ({ children, redirectPath = "/" }) => {
    return !currentUser ? children : <Navigate to={redirectPath} />;
  };

  useEffect(() => {
    dispatch(login(JSON.parse(localStorage.getItem("user"))));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comic/:id" element={<ComicDetail />} />
        <Route path="*" element={<NotFound404 />} />
        <Route exact path="/login" element={ <RequireAuth> <Login /> </RequireAuth> } />
        <Route exact path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
