import { Route, Routes } from "react-router-dom";
import Home from "../../page/Home/Home";
import Catalog from "../../page/Catalog";
import Favorites from "../../page/Favorites";
import SharedLayout from "../SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
