import React from 'react';
import {Component} from 'react';
import './Clock.css';

let time = new Date().toLocaleString();

class Clock extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          date: new Date()
        };
      }
    
      componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    
      render() {
        const hoursDegrees = this.state.date.getHours() * 30 + this.state.date.getMinutes() /2;
        const minutesDegrees = this.state.date.getMinutes() * 6 + this.state.date.getSeconds() /10;
        const secondsDegrees = this.state.date.getSeconds() * 6;
        
        const divStyleHours = {
          transform: "rotateZ(" + hoursDegrees + "deg)"
        };
    
        const divStyleMinutes = {
          transform: "rotateZ(" + minutesDegrees + "deg)"
        };
        
        const divStyleSeconds = {
          transform: "rotateZ(" + secondsDegrees + "deg)"
        };
    
        return (
          <div>
            
            <div className="clock-container styling">
              <div id="clock" className="clock-content clock">
                
                
                <ul>
                    <li><span>一</span></li>
                    <li><span>二</span></li>
                    <li><span>三</span></li>
                    <li><span>四</span></li>
                    <li><span>五</span></li>
                    <li><span>六</span></li>
                    <li><span>七</span></li>
                    <li><span>八</span></li>
                    <li><span>九</span></li>
                    <li><span>十</span></li>
                    <li><span>十三</span></li>
                    <li><span>二十</span></li>
                </ul>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpJxqPTqq3GrrB-8oTxz_RP1s26Pctg_g2XLoPtmAMVl_16I_"></img>

                
                
                <div
                  id="hours-indicator"
                  className={
                    "indicator hours-indicator " +
                    (this.state.date.getHours() === 0 ? "" : "transition-effect")
                  }
                  style={divStyleHours}></div>
                <div
                  id="minutes-indicator"
                  className={
                    "indicator minutes-indicator " +
                    (this.state.date.getMinutes() === 0 ? "" : "transition-effect")
                  }
                  style={divStyleMinutes}></div>
                <div
                  id="seconds-indicator"
                  className={
                    "indicator seconds-indicator " +
                      (this.state.date.getSeconds() === 0 ? "" : "transition-effect")
                  }
                  style={divStyleSeconds}></div>
                <div className="indicator-cover"></div>
              </div>
            </div>
            { <div className="digital"> {this.state.date.toLocaleTimeString()}</div> }
          </div>     
        );
      }
    }

export default Clock;