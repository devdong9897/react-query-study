import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReactQueryPage from "./pages/ReactQueryPage";
import { NormalPage } from "./pages/NormalPage";

function App() {
  return (
    <div className="App">
      <nav style={{ backgroundColor: "beige", padding: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          HomePage
        </Link>
        <Link to="/normal">NormalPage</Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/normal" element={<NormalPage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
