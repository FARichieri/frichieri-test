import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComicDetail from "./components/comicDetail/ComicDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ComicDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
