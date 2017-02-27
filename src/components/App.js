import React, { Component } from 'react';

class App extends Component {

  renderContainer(){
    const {city, temp} = this.props;
    return(
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title fz-8">
              {`${temp}°c`}
            </h1>
            <h2 className="subtitle is-2">
              {city}
            </h2>
          </div>
        </div>
      </section>
    );
  }

  render() {
    return this.renderContainer();
  }
}

export default App;
