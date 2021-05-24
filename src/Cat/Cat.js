import { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from '@material-ui/core';
import './Cat.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  maxMeow: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  maxMeow: 10,
  color: 'deeppink',
};

const Cat = (props) => {
  const [meows, setMeows] = useState(0);

  const meow = () => {
    if (meows < props.maxMeow) {
      setMeows((old_meows_count) => old_meows_count + 1);
    } else {
      alert(`${props.name} already meowed too much !`);
    }
  };

  return (
    <div className="Cat">
      <div className="info">
        I am
        <span className="name" style={{ color: props.color }}>
          {props.name}
        </span>
        ! I am
        {props.age} years old and I do {props.maxMeow} meows per hour
        <div>
          Meows <Badge>{meows}</Badge>
        </div>
      </div>
      <Button onClick={meow}>Meow</Button>
    </div>
  );
};

Cat.propTypes = propTypes;
Cat.defaultProps = defaultProps;
export default Cat;
