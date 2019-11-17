import './App.css';

import React from 'react';
//import { render } from "react-dom"
import { Router, Link } from "@reach/router"


let Home = function(){
  return (<h1>Home</h1>)
}

let Dashboard = function(){
  return (<h1>Dashboard</h1>)
}

//function MyApp() {
//  render(
//    <Router>
//      <Home path="/" />
//      <Dashboard path="dashboard" />
//    </Router>
//  )
//}

//class MyApp extends React.Component {
//  render() {
//    return <h1>Hello, {this.props.name}</h1>;
//  }
//}

class MyApp extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
          <Link to="/dashboard">Dashboard</Link>
        </header>

          <Router>
            <Home path="/" />
            <Dashboard path="dashboard" />
          </Router>


      </div>
    );
  };
};

export default MyApp;
