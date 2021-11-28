import React from "react";
import { useState, useEffect } from 'react'

import { Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import Search from "../../components/Search";
import  Services  from '../../components/Services'
import Articles from "../Articles";
import Article from "../Article";
import Home from "../Home";
import Job from "../Job";
import Category from "../Category";
//import { Navigation } from '../../components/navigation'
import Sliders from '../../components/Header'
import  Features  from '../../components/Features'
import  About  from '../../components/About'
import Projects from '../../components/Gallery'
import Banner from '../../components/Banner'
import Banner1 from '../../components/Banner1'
import Testimonials from '../../components/Testimonials'
import Jobs from '../../components/Jobs'
import Footer  from '../../components/Footer'
import Clients  from '../../components/Team'
import Email from '../../components/Contact'
import Resumes  from '../../components/Resumes'

function App() {
  return (
    <div className="App">
          <Nav />
          <Route path="/" component={Home} exact />
         
      <Switch>
              <Route path="/othain2/:id" component={Article} exact />
             
              
          </Switch>
          
         
        
          
          
    </div>
  );
}

export default App;
