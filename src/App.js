import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComboBox from "./ComboBox";

let data = [
  {
    valueField : 1,
    title : 'Golden state warriors',
    textField : "The Golden State Warriors are an American professional basketball team based in San Francisco. The Warriors compete in the National Basketball Association, as a member of the league's Western Conference Pacific Division."
  },
  {
    valueField : 2,
    title : 'Los Angeles Lakers',
    textField : "The Los Angeles Lakers are an American professional basketball team based in Los Angeles. The Lakers compete in the National Basketball Association, as a member of the league's Western Conference in the Pacific Division."
  },
  {
    valueField : 3,
    title : 'Houston Rockets',
    textField : "The Houston Rockets are an American professional basketball team based in Houston. They compete in the National Basketball Association as a member team of the league's Western Conference Southwest Division. The team plays its home games at the Toyota Center, located in Downtown Houston."
  }
]

class App extends Component {
  render(){
    return (
      <div className="App">
        <ComboBox data={data} />
      </div>
    );
  }
}

export default App;
