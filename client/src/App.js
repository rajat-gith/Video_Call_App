import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Room from "./pages/Room";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
