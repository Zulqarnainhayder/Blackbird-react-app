import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Contact from './Contact'  
import Home from './Home'  

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/contact' element={< Contact />}></Route>
        <Route exact path='/' element={< Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
