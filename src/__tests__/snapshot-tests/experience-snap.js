import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Experience from '../../components/experience';
import juniperLogo from '../mocks/juniper-logo.json';
import jpmcLogo from '../mocks/jpmc-logo.json';
import honeywellLogo from '../mocks/honeywell-logo.json';
import techmLogo from '../mocks/techm-logo.json';

it('Experience renders correctly', () => {
  const Wrapper = shallow(<Experience
    juniperLogo={juniperLogo}
    jpmcLogo={jpmcLogo}
    honeywellLogo={honeywellLogo}
    techmLogo={techmLogo}
  />);
  expect(toJSON(Wrapper)).toMatchSnapshot();
});
