import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Support from "./components/Support/Support";
import Policy from "./components/Policy/Policy";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="support" Component={Support} />
        <Route path="policy" Component={Policy} />
      </Routes>
    </div>
  );
}

export default App;
