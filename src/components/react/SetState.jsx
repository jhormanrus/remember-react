import React from 'react';

class SetState extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        count++: {this.state.count}
      </button>
    );
  }
}

export default SetState;
