import React, { Component } from 'react';


class TestAPICall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <h1>Testing!</h1>
    );
  }
}

export default TestAPICall;