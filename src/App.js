import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Settings"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import {Context} from "./context/Context";

function App() {
  const {user}=useContext(Context)
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/register" element={user?<Home/>:<Register/>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={user?<Home/>:<Login/>}/>
      </Routes>
      <Routes>
        <Route path="/settings" element={user?<Setting/>:<Register/>}/>
      </Routes>
      <Routes>
        <Route path="/write" element={user?<Write/>:<Register/>}/>
      </Routes>
      <Routes>
        <Route path="/post/:postId" element={<Single />}/>
      </Routes>
    </Router>
  );
}

export default App;