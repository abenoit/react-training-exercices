import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './Cat.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  meowsPerHour: PropTypes.number,
  color: PropTypes.string
};

const defaultProps = {
  meowsPerHour: 10,
  color: 'deeppink'
};

class Cat extends Component {
  constructor(props) {
    super(props);

    this.meow = this.meow.bind(this);
  }

  meow() {
    console.log(`${this.props.name} meows`);
  }

  render() {
    return (
      <div className="Cat">
        <p>
          I am
          <span className="name" style={{ color: this.props.color }}>
            {this.props.name}
          </span>
          ! I am
          {this.props.age} years old and I do {this.props.meowsPerHour} meows
          per hour
        </p>

        <Button onClick={this.meow}>Meow</Button>
      </div>
    );
  }
}

Cat.propTypes = propTypes;
Cat.defaultProps = defaultProps;
export default Cat;
