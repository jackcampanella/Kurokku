import React from 'react';
import {Component} from 'react';
import './App.scss'
import Clock from './Clock';
import DarkModeToggle from './DarkModeToggle';



class App extends Component{
  render(){
    return(
        <div>
          <div className="navbar">
            <ul>
             
              <DarkModeToggle />
            </ul>
            
          </div>
          <Clock></Clock>
        </div>
        

     
      
    );
  }
}

export default App;
