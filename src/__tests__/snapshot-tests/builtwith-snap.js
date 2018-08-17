import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import BuiltWith from '../../components/builtwith';
import 'jest-styled-components';

it('aboutme renders correctly', () => {
  const wrapper = shallow(<BuiltWith tech={['react', 'typescript', 'gatsby']} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
