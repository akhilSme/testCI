import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';

Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For Login component', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Login />)
      expect(wrapper.exists()).toBe(true);
    })

    it('should render the component classname', () => {
      const wrapper = shallow(<Login />)
      const elmClassname  = wrapper.find('.container');
      expect(elmClassname.length).toBe(1)
    })

    it('should render the button element', () => {
      const wrapper = shallow(<Login />)
      const buttonElement  = wrapper.find('button');
      expect(buttonElement.length).toBe(2)
    })

    it('should render the Sign in button name', () => {
      const wrapper = shallow(<Login />)
      const buttonElement  = wrapper.find('#signin');
      expect(buttonElement.text()).toEqual('Sign in')
    })

    it('should render the Sign up button name', () => {
      const wrapper = shallow(<Login />)
      const buttonElement  = wrapper.find('#signup');
      expect(buttonElement.text()).toEqual('Sign Up')
    })

    it('should render the Sign in button click', () => {
      const mockCallBack = jest.fn();

      const wrapper = shallow(<Login />)
      const buttonElement  = wrapper.find('#signin');
      buttonElement.simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(0);
    })

    it('should render the Sign up button click', () => {
      const mockCallBack = jest.fn();

      const wrapper = shallow(<Login />)
      const buttonElement  = wrapper.find('#signup');
      buttonElement.simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(0);
    })
  })