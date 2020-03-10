import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.deleteBand(this.props.band.id)
    console.log(this.props.band.id)
  }

  render() {
    return(
      <div>
        <span>Name: {this.props.band.name}</span><button onClick={this.handleClick}>DELETE</button>
      </div>
    );
  }
};

export default Band;
