import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class Second extends React.Component {
  render(){
    return (
      <div id="second" style ={{transform : this.props.second_angle}}></div>
    );
  }
}

class Minute extends React.Component {
  render(){
    return (
      <div id="minute" style ={{transform : this.props.minute_angle}}></div>
    );
  }
}

class Hour extends React.Component {
  render(){
    return (
      <div id="hour" style ={{transform : this.props.hour_angle}}></div>
    );
  }
}
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {hour_angle : '' , minute_angle : '' , second_angle : '' };
    this.componentWillMount = this.componentWillMount.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentWillMount(){
    this.timerId = setInterval(this.tick,1000);
  }

  tick(){
    const date = this.props.date ;
    const message = date.toLocaleTimeString().split(':');
    const hour_hand = parseInt(message[0]);
    const minute_hand = parseInt(message[1]);
    let second_hand = message[2].split(' ');
    second_hand = parseInt(second_hand[0]);
    const x = hour_hand*30 + minute_hand*0.5;
    this.setState({minute_angle:"rotate("+minute_hand*(6)+"deg)"})
    this.setState({second_angle : "rotate("+second_hand*(6)+"deg)"});
    this.setState({hour_angle : "rotate("+x+"deg)"})
  }

  render() {
    return (
    <div className = "outer_radius">
      <div className = "inner_radius">
        <Hour hour_angle = {this.state.hour_angle} />
        <Minute minute_angle = {this.state.minute_angle}/>
        <Second second_angle = {this.state.second_angle}/>
        <div id= "dot"></div>
      </div>
  </div>
    );
  }
}

ReactDOM.render(<Clock date = {new Date()} />, document.getElementById("root"));
