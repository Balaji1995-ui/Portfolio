import './App.css';
import {BrowserRouter as Router, Route,Routes,Link} from "react-router-dom"
import Hox from './SinglePage/Hox';
import Portfolio from './SinglePage/Portfolio';
import Homes from './SinglePage/Home';
import React from 'react';
import Contact from './SinglePage/Contact';
function App() {
  return (
    <div className="App">

 <Router>
  <Routes>
   <Route path='/' element={<Homes/>}></Route>
    <Route path='/Resume' element={<Hox/>}></Route>
    <Route path='/Portfolio' element={<Portfolio/>}/>
    <Route path='/Contact' element={<Contact/>}></Route>
  </Routes>
 </Router>

    </div>
  );
}

export default App;
