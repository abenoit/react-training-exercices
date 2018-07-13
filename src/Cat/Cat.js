import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../App/App';
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

const Cat = ({ name, age, meow, meowsPerHour, color }) => {
  const catmeow = () => {
    console.log('meow from cat');
    meow();
  };

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div
          className="Cat"
          style={{ backgroundColor: theme.background, color: theme.textColor }}
        >
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
      )}
    </ThemeContext.Consumer>
  );
};

Cat.propTypes = propTypes;
Cat.defaultProps = defaultProps;
export default Cat;
