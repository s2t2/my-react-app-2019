
import React from "react"; // avoids error: 'React' must be in scope when using JSX

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    console.log("CLOCK DID MOUNT")
    console.log("CLOCK PROPS", this.props)
    console.log("CLOCK STATE", this.state)
    this.interval = setInterval(() => this.setState({date: new Date()}), 1000);
  }

  componentWillUnmount() {
    console.log("CLOCK WILL UNMOUNT")
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <h2>The time is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
