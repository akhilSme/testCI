import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Admin from './Admin';

Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For Admin component', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Admin />)
      expect(wrapper.exists()).toBe(true);
    })

    it('should render the component classname', () => {
      const wrapper = shallow(<Admin />)
      const elmClassname  = wrapper.find('.container');
      expect(elmClassname.length).toBe(1)
    })

    it('should render the component sub heading', () => {
      const wrapper = shallow(<Admin />)
      const elmClassname  = wrapper.find('.sub-heading');
      expect(elmClassname.length).toBe(3)
    })

    it('should render the datePicker element', () => {
      const wrapper = shallow(<Admin />)
      const elmClassname  = wrapper.find('#fromDate');
      expect(elmClassname.length).toBe(1)
    })

    it('should render the archive button element', () => {
      const wrapper = shallow(<Admin />)
      const elmClassname  = wrapper.find('.archive-button');
      expect(elmClassname.length).toBe(2)
    })

    it('should render the delete button element', () => {
      const wrapper = shallow(<Admin />)
      const elmClassname  = wrapper.find('.delete-button');
      expect(elmClassname.length).toBe(1)
    })

    it('should render the datePicker element', () => {
      const wrapper = shallow(<Admin />)
      const elmClassname  = wrapper.find('#fromDate');
      expect(elmClassname.length).toBe(1)
    })

    it('should render the archive delete button element', () => {
      const wrapper = shallow(<Admin />)
      const elmClassname  = wrapper.find('.archive-button');
      expect(elmClassname.length).toBe(2)
    })
  })