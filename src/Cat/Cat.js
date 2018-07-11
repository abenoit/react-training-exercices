import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cat.css';

// TODO: add cat's color
const propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  meowsPerHour: PropTypes.number
};

const defaultProps = {
  meowsPerHour: 10
};

class Cat extends Component {
  render() {
    // TODO : add a style property to cat's name
    // TODO (3) : add a button for the cat to meow
    return (
      <div className="Cat">
        <p>
          I am <span className="name">{this.props.name}</span> ! I am
          {this.props.age} years old and I do {this.props.meowsPerHour} meows
          per hour
        </p>
      </div>
    );
  }
}

Cat.propTypes = propTypes;
Cat.defaultProps = defaultProps;
export default Cat;
