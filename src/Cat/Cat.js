import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './Cat.css';

// TODO : add name (required), age (required) and meowsPerHour
const propTypes = {};

// TODO : add a default value for meowsPerHour
const defaultProps = {};

class Cat extends Component {
  render() {
    // TODO : use this.props to access cat's name, age and meowPerHour
    // Tip : use {} to inject Javascript in the pseudo-HTML below
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
