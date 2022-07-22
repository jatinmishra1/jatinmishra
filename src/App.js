import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Video from './Video';
import Home from './Home';
function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    <Route  path="/video" element={<Video/>}></Route>
  </Routes>
  </Router>
  );
}

export default App;
