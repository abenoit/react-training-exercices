import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CatForm from '../CatForm';

describe('CatForm', () => {
  it('should display a cat form', () => {
    const catForm = renderer.create(<CatForm addCat={() => {}} />).toJSON();
    expect(catForm).toMatchSnapshot();
  });

  describe('handleChangeName', () => {
    test("should update cat's name in state", () => {
      const catForm = shallow(<CatForm addCat={() => {}} />);
      const event = { target: { value: 'new name' } };

      catForm.instance().handleChangeName(event);

      expect(catForm.state('cat').name).toEqual('new name');
    });
  });

  describe('handleChangeAge', () => {
    test("should update cat's age in state", () => {
      const catForm = shallow(<CatForm addCat={() => {}} />);
      const event = { target: { valueAsNumber: 2 } };

      catForm.instance().handleChangeAge(event);

      expect(catForm.state('cat').age).toEqual(2);
    });
  });

  describe('handleChangeMeowsPerHour', () => {
    test("should update cat's meowsPerHour in state", () => {
      const catForm = shallow(<CatForm addCat={() => {}} />);
      const event = { target: { valueAsNumber: 4 } };

      catForm.instance().handleChangeMeowsPerHour(event);

      expect(catForm.state('cat').meowsPerHour).toEqual(4);
    });
  });

  describe('handleChangeColor', () => {
    test("should update cat's color in state", () => {
      const catForm = shallow(<CatForm addCat={() => {}} />);
      const event = { target: { value: 'pink' } };

      catForm.instance().handleChangeColor(event);

      expect(catForm.state('cat').color).toEqual('pink');
    });
  });

  describe('handleChangeColor', () => {
    it('should return false if name and age are set', () => {
      const catForm = shallow(<CatForm addCat={() => {}} />);
      catForm.setState({ cat: { name: 'lala', age: 3 } });

      const isSubmitDisabled = catForm.instance().isSubmitDisabled();

      expect(isSubmitDisabled).toBeFalsy();
    });

    it('should return true if name is not set', () => {
      const catForm = shallow(<CatForm addCat={() => {}} />);
      catForm.setState({ cat: { name: '', age: 3 } });

      const isSubmitDisabled = catForm.instance().isSubmitDisabled();

      expect(isSubmitDisabled).toBeTruthy();
    });

    it('should return true if age is not set', () => {
      const catForm = shallow(<CatForm addCat={() => {}} />);
      catForm.setState({ cat: { name: 'lala' } });

      const isSubmitDisabled = catForm.instance().isSubmitDisabled();

      expect(isSubmitDisabled).toBeTruthy();
    });
  });

  describe('addCat', () => {
    it('should call callback in props', () => {
      const catForm = shallow(<CatForm addCat={jest.fn()} />);

      catForm.instance().addCat();

      expect(catForm.instance().props.addCat).toHaveBeenCalled();
    });

    it('should reinit the state', () => {
      const catForm = shallow(<CatForm addCat={jest.fn()} />);

      catForm.instance().addCat();

      expect(catForm.state('cat').name).toEqual('');
      expect(catForm.state('cat').age).toEqual(1);
      expect(catForm.state('cat').meowsPerHour).toEqual(10);
      expect(catForm.state('cat').color).toEqual('green');
    });
  });
});
