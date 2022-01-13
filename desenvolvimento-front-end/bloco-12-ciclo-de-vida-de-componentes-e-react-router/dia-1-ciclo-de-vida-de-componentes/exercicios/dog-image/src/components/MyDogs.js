import React, { Component } from 'react';

class MyDogs extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nexState) {
    if (nexState.data.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const { data } = this.state;
    localStorage.setItem('dogURL', data.message);
    const raca = data.message.split('/')[4];
    alert(raca);
  }

  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((response) => this.setState({ data: response }));
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        {data === '' ? (
          'Loading...'
        ) : (
          <div className="container">
            <h1>Dog</h1>
            <button type="button" onClick={ this.fetchDog }>
              Outro Dog!
            </button>
            <img src={ data.message } alt="Dog" />
          </div>
        )}
      </div>
    );
  }
}

export default MyDogs;
