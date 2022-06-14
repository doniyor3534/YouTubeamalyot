import React from 'react';
import '../App.css'
import Home from './Home';
import  Home1 from './Home1';
import Navbar from './Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const YouTube = () => {
    return (
        <div>
            <Router>
              <Navbar/>
              <Routes>
                  <Route  path="/" element={<Home/>} />
                  <Route  path="/page2" element={<Home1/>} />
              </Routes>
           </Router> 
           
        </div>
    );
};

export default YouTube;