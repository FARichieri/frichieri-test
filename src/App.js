import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComicDetail from "./pages/comicDetail/ComicDetail";
import Favorites from "./pages/favorites/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ComicDetail />} />
        <Route exact path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
