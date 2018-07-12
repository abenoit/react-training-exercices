import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Cat from '../Cat';

describe('Cat', () => {
  it('should display a cat', () => {
    const cat = renderer.create(<Cat name="lala" age={3} />).toJSON();
    expect(cat).toMatchSnapshot();
  });

  describe('meow', () => {
    it('should increment meows if maximum is not reached', () => {
      const cat = shallow(<Cat name="lala" age={3} />);
      const initialMeows = cat.state('meows');

      cat.instance().meow();

      expect(initialMeows).toEqual(0);
      expect(cat.state('meows')).toEqual(1);
    });

    it('should alert and not increment meows if max is reached', () => {
      const cat = shallow(<Cat name="lala" age={3} meowsPerHour={0} />);

      const initialMeows = cat.state().meows;

      cat.instance().meow();

      expect(initialMeows).toEqual(0);
      expect(cat.state('meows')).toEqual(0);
    });
  });
});
