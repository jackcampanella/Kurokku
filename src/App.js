import React from 'react';
import {Component} from 'react';
import './App.css';
import Clock from './Clock';

let time = new Date().toLocaleString();

class App extends Component{
  render(){
    return(
      
      <Clock></Clock>
    );
  }
}

export default App;
