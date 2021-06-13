import React,{useEffect, useState} from 'react';
import './component/Login/index.css'
import {Navbar} from './component'
import {Footer} from './component'
import axios from 'axios';
import { HomePages,
  HomeValoPages,
  HomePUBGPages,
  HomeMLPages,
SignUpPages,ProfilePages} from './pages';
import {Switch, Route, Link } from 'react-router-dom';
function App() {
return(
      <>
            <Navbar />
            <Switch>
            <Route exact path="/" component={HomePages}/>
            <Route exact path="/HomeValoPages" component={HomeValoPages}/> 
            <Route exact path="/HomePUBGPages" component={HomePUBGPages}/> 
            <Route exact path="/HomeMLPages" component={HomeMLPages}/> 
            <Route exact path="/SignUpPages" component={SignUpPages}/> 
            </Switch>
            <Footer /> 
      </>
    )
  }
export default App;