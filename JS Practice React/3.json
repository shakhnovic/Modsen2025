import React, { Component } from 'react';

class ToggleButton extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,  
    };
  }

 
  toggleButton = () => {
    this.setState((prevState) => ({
      isShown: !prevState.isShown,  
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleButton}>
          {this.state.isShown ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default ToggleButton;