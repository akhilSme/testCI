import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For Header component', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.exists()).toBe(true);
    })

    it('should render the component classname', () => {
        const wrapper = shallow(<Header />)
        const elmClassname  = wrapper.find('.head-wrapper');
        expect(elmClassname.length).toBe(1)
        // expect(buttonElement).toHaveLength(1);
        // expect(wrapper.exists()).toBe(true);
      })

      it('should render the component element find', () => {
        const wrapper = shallow(<Header />)
        const elmClassname  = wrapper.find('.heading');
        // expect(elmClassname.length).toBe(1)
        expect(elmClassname).toHaveLength(1);
        // expect(wrapper.exists()).toBe(true);
      })

      it('should render the component element find', () => {
        const wrapper = shallow(<Header />)
        const elmClassname  = wrapper.find('.heading');
        // expect(elmClassname.length).toBe(1)
        expect(elmClassname.text()).toEqual('Weather App');
        // expect(wrapper.exists()).toBe(true);
      })
  })