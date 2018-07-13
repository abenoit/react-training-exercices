import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve([]) })
      );

    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });
});
