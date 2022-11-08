import { Routes, Route } from "react-router-dom";
import Sop from "./Pages/sop.jsx";
import SopAccess from "./Pages/sopAccess";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sop />} />
        <Route path="/access" element={<SopAccess />} />
      </Routes>
    </div>
  );
}

export default App;
