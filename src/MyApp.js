import './App.css';

import React from 'react';
import { Router, Link } from "@reach/router"

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
      <div>
        <nav>
          <Link to="/">Home</Link>&nbsp;|&nbsp;
          <Link to="dash">Dashboard</Link>&nbsp;|&nbsp;
          <Link to="clock">Clock</Link>
        </nav>
        <hr/>

        <Router>
          <Home path="/" />
          <Dashboard path="dash" />
          <Clock path="clock" />
        </Router>

        <hr/>
        <footer>
          <p>
            Copyright &copy; 2019 Data Creative, LLC&nbsp;|&nbsp;
            <a href="https://github.com">Source Code</a>

          </p>
        </footer>
      </div>
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
