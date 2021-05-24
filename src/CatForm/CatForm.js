import { useState } from 'react';
import PropTypes from 'prop-types';
import { InputLabel, FormControl, Button, Input } from '@material-ui/core';
import './CatForm.css';

const propTypes = {
  addCat: PropTypes.func.isRequired,
};

const CatForm = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(1);
  const [maxMeow, setMaxMeow] = useState(10);

  const isSubmitDisabled = () => {
    return !name || !age;
  };

  const addCat = () => {
    props.addCat({
      name,
      age,
      maxMeow,
    });

    setName('');
    setAge(1);
    setMaxMeow(10);
  };

  return (
    <div className="CatForm">
      <h2> Add a new cat </h2>
      <form>
        <FormControl>
          <InputLabel>Name * </InputLabel>
          <Input
            value={name}
            placeholder="Name"
            onChange={(evt) => setName(evt.target.value)}
          />
        </FormControl>

        <FormControl>
          <InputLabel>Age * </InputLabel>
          <Input
            type="number"
            value={age}
            placeholder="Age"
            onChange={(evt) => setAge(evt.target.value)}
          />
        </FormControl>

        <FormControl>
          <InputLabel>MeowsPerHour</InputLabel>
          <Input
            type="number"
            width="200px"
            value={maxMeow}
            placeholder="Max meows"
            onChange={(evt) => setMaxMeow(evt.target.value)}
          />
        </FormControl>

        <Button
          variant="contained"
          bsStyle="primary"
          onClick={addCat}
          disabled={isSubmitDisabled()}
        >
          Add this cat
        </Button>
      </form>
    </div>
  );
};

CatForm.propTypes = propTypes;
export default CatForm;
