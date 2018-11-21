import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import jsonFoods from './foods.json'
import FoodBox from './FoodBox'
import AddFood from './AddFood'





class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      foods: jsonFoods
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ironnutrition</h1>
        </header>
       {(this.state.foods).map((foodthatiamloopingthorugh, i) =>(
         <div>
         <FoodBox key={i} food={foodthatiamloopingthorugh} />
         </div>
       ))
      }
      <AddFood />
      </div>
    );
  }
}

export default App;



