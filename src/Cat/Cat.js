import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './Cat.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  meow: PropTypes.func,
  meowsPerHour: PropTypes.number,
  color: PropTypes.string
};

const defaultProps = {
  meowsPerHour: 10,
  meow: () => {},
  color: 'deeppink'
};

// TODO : Add a consumer tag and consume the value

const Cat = ({ name, age, meow, meowsPerHour, color }) => {
  const catmeow = () => {
    console.log('meow from cat');
    meow();
  };

  return (
    <div className="Cat">
      <div className="info">
        I am
        <span className="name" style={{ color: color }}>
          {name}
        </span>
        ! I am
        {age} years old and I do {meowsPerHour} meows per hour
      </div>
      <Button onClick={catmeow}>Meow</Button>
    </div>
  );
};

Cat.propTypes = propTypes;
Cat.defaultProps = defaultProps;
export default Cat;
