import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Cat from '../Cat';

describe('Cat', () => {
  it('should display a cat', () => {
    const cat = renderer.create(<Cat name="lala" age={3} />).toJSON();
    expect(cat).toMatchSnapshot();
  });
});
