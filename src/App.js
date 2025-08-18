import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home";      
import Profile from "./pages/profile";
import Articles from "./pages/Articles"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App" style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
