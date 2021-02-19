import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

class Hour extends React.Component {
  constructor(props){
    super(props);
    this.state = {hour_angle : ''};
    this.componentWillMount = this.componentWillMount.bind(this);
    this.tick = this.tick.bind(this);
  }


  componentWillMount(){
    this.timerId = setInterval(this.tick(),1000);
  }

  tick(){
    const date = new Date();
    const message = date.toLocaleTimeString().split(':');
    const hour_hand = parseInt(message[0]);
    const minute_hand = parseInt(message[1]);
    const x = hour_hand*30 + minute_hand*0.5;
    this.setState ( {hour_angle : "rotate("+x+"deg)"})
  }

  render(){
    return (
      <div id="hour" style ={{transform : this.state.hour_angle}}></div>
    );
  }

}
class Clock extends React.Component {
  render() {
    return (
    <div className = "outer_radius">
      <div className = "inner_radius">
        <Hour />
        <div id="minute"></div>
        <div id="second"></div>
        <div id= "dot"></div>
      </div>
  </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
