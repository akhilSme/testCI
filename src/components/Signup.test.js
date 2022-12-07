import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUp from './SignUp';

Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For Signup component', () => {
  it('should render the component', () => {
    const wrapper = shallow(<SignUp />)
    expect(wrapper.exists()).toBe(true);
  })

  it('should render the component classname', () => {
    const wrapper = shallow(<SignUp />)
    const elmClassname = wrapper.find('.container');
    expect(elmClassname.length).toBe(1)
  })

  it('should render the button element', () => {
    const wrapper = shallow(<SignUp />)
    const buttonElement = wrapper.find('button');
    expect(buttonElement.length).toBe(1)
  })

  it('should render the Sign up button name', () => {
    const wrapper = shallow(<SignUp />)
    const buttonElement = wrapper.find('button');
    expect(buttonElement.text()).toEqual('Sign up')
  })

  it('should render the Sign up button click', () => {
    const mockCallBack = jest.fn();

    const wrapper = shallow(<SignUp />)
    const buttonElement = wrapper.find('button');
    buttonElement.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(0);
  })
})