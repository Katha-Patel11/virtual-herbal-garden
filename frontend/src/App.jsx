import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";

function App(){
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/herbalcure" element={<Search/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;