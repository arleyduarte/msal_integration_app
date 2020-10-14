import 'react-native';
import React from 'react';
import App from '../src/App';
import {shallow} from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

// Using Jest + Enzyme
describe('<App />', () => {
  const app = shallow(<App />);
  it('renders correctly, test using Jest + Enzyme', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders login button', () => {
    expect(app.find({testID: 'login-msal'})).toExist();
  });
});
