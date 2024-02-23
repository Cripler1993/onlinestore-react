import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FullProduct from "./pages/FullProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<FullProduct />} />
      </Routes>
    </div>
  );
}

export default App;
