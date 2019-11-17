
import React from "react"; // avoids error: 'React' must be in scope when using JSX

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    console.log("CLOCK DID MOUNT")
  }

  componentWillUnmount() {
    console.log("CLOCK WILL UNMOUNT")
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <h2>The time is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
