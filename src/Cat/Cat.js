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
  const { name, age, maxMeow, color } = props;

  // TODO : Init state

  const meow = () => {
    // TODO : Change state here
    console.log(`${name} meows`);
  };

  return (
    <div className="Cat">
      <div className="info">
        I am
        <span className="name" style={{ color: color }}>
          {name}
        </span>
        ! I am
        {age} years old and I can do {maxMeow} meows at max.
        <div>
          Meows <Badge>0</Badge>
        </div>
      </div>
      <Button variant="contained" onClick={meow}>
        Meow
      </Button>
    </div>
  );
};

Cat.propTypes = propTypes;
Cat.defaultProps = defaultProps;
export default Cat;
