import './App.css';

import React from 'react';
import { Router } from "@reach/router"

import Clock from './Clock';
import Dashboard from './Dashboard';
import Home from './Home';

class MyApp extends React.Component {
  componentDidMount() {
    console.log("APP DID MOUNT")
  }

  componentWillUnmount() {
    console.log("APP WILL UNMOUNT")
  }

  render() {
    return (
      <Router>
        <Home path="/" />
        <Dashboard path="dash" />
        <Clock path="clock" />
      </Router>
    );
  };
};

//import { render } from "react-dom"

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



export default MyApp;
