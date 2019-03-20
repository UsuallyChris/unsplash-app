import React, { Component } from 'react';



class TestAPICall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
    fetch(`https://api.unsplash.com/photos/?client_id=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data
        })
      })
  }

  render() {

    return(
      <div>
        {this.state.data.map(pic => <img src={pic.urls.small} alt=""/>)}
      </div>
    );
  }
}

export default TestAPICall;