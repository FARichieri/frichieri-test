import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComicDetail from "./pages/comicDetail/ComicDetail";
import Favorites from "./pages/favorites/Favorites";
import NotFound404 from "./pages/notFound404/NotFound404";
import Login from "./pages/login/Login";
import { Navigate } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comic/:id" element={<ComicDetail />} />
        <Route path="*" element={<NotFound404 />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/favorites"
          element={
            <RequireAuth>
              <Favorites />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
