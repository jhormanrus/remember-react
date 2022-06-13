import React, { Component } from 'react';

class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'stateful',
    };
  }
  render() {
    return <span>{this.state.text}</span>;
  }
}

export default Stateful;
