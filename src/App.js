import './App.css';
import styled from 'styled-components'
import React, { Component } from 'react';
import { Route , Switch } from "react-router-dom";
import NavBar from "./layout/navBar/navigation-bar";
import Home from "./pages/homepage";
import Footer from "./layout/footer/footer";
import Work from "./pages/work";


function App() {
  return (
    <div className="App">
        <NavBar/>

      <Switch >
            <Route exact path = '/' component = { Home} />
            <Route path = '/pages/work' component = { Work } />
            <Route render = { () => <h1 >404</h1 > } />
      </Switch >
        <Footer/>
    </div>
  );
}

export default App;
