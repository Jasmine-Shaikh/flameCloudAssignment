import { Routes, Route } from "react-router-dom";
import Sop from "./Pages/Sop.jsx";
import SopAccess from "./Components/SopAccess";

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
