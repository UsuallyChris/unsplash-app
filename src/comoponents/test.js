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
    fetch(`https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=10`)
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
        {this.state.data.map(pic => <img src={pic.urls.regular} key={pic.id} alt=""/>)}
      </div>
    );
  }
}

export default TestAPICall;