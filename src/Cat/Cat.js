import React, { Component } from 'react';
import './Cat.css';

const propTypes = {};

const defaultProps = {};

class Cat extends Component {
  render() {
    return (
      <div className="Cat">
        Hello, my name is Kitty ! I am 3 years old, and I do 11 meows per hour.
      </div>
    );
  }
}

Cat.propTypes = propTypes;
Cat.defaultProps = defaultProps;
export default Cat;
