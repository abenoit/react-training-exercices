import PropTypes from 'prop-types';
import './Cat.css';

// TODO: add cat's color
const propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  maxMeows: PropTypes.number
};

const defaultProps = {
  maxMeows: 10
};

const Cat = (props) => {
    // TODO : add a style property to cat's name
    // TODO (3) : add a button for the cat to meow
    return (
      <div className="Cat">
        <p>
          I am <span className="name">{props.name}</span> ! I am
          {props.age} years old and I can do {props.maxMeows} at max.
          per hour
        </p>
      </div>
    );
}

Cat.propTypes = propTypes;
Cat.defaultProps = defaultProps;
export default Cat;
