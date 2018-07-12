import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, ControlLabel, FormControl, Button } from 'react-bootstrap';
import './Cat.css';

const propTypes = {
  addCat: PropTypes.func.isRequired
};

const defaultCat = {
  name: '',
  age: 1,
  meowsPerHour: 10,
  color: 'green'
};

class CatForm extends Component {
  constructor() {
    super();

    this.state = {
      cat: { ...defaultCat }
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeMeowsPerHour = this.handleChangeMeowsPerHour.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.addCat = this.addCat.bind(this);
  }

  handleChangeName(event) {
    this.setState({ cat: { ...this.state.cat, name: event.target.value } });
  }

  handleChangeAge(event) {
    this.setState({
      cat: { ...this.state.cat, age: event.target.valueAsNumber }
    });
  }

  handleChangeMeowsPerHour(event) {
    this.setState({
      cat: { ...this.state.cat, meowsPerHour: event.target.valueAsNumber }
    });
  }

  handleChangeColor(event) {
    this.setState({
      cat: { ...this.state.cat, color: event.target.value }
    });
  }

  isSubmitDisabled() {
    return !this.state.cat.name || !this.state.cat.age;
  }

  addCat() {
    this.props.addCat(this.state.cat);
    this.setState({
      cat: { ...defaultCat }
    });
  }

  render() {
    return (
      <div className="CatForm">
        <h2> Add a new cat </h2>
        <Form inline>
          <ControlLabel>Name * </ControlLabel>
          <FormControl
            value={this.state.cat.name}
            placeholder="Name"
            onChange={this.handleChangeName}
          />

          <ControlLabel>Age * </ControlLabel>
          <FormControl
            type="number"
            value={this.state.cat.age}
            placeholder="Age"
            onChange={this.handleChangeAge}
          />

          <ControlLabel>MeowsPerHour</ControlLabel>
          <FormControl
            type="number"
            width="200px"
            value={this.state.cat.meowsPerHour}
            placeholder="MeowsPerHour"
            onChange={this.handleChangeMeowsPerHour}
          />

          <ControlLabel>Color</ControlLabel>
          <FormControl
            width="200px"
            value={this.state.cat.color}
            placeholder="Color"
            onChange={this.handleChangeColor}
          />

          <Button
            bsStyle="primary"
            onClick={this.addCat}
            disabled={this.isSubmitDisabled()}
          >
            Add this cat
          </Button>
        </Form>
      </div>
    );
  }
}

CatForm.propTypes = propTypes;
export default CatForm;
