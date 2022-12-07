import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';

Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For Home component', () => {
    const cols = [
       { header: 'Sunrise', name: 'sunrise' },
       { header: 'Sunset', name: 'sunset' },
       { header: 'Min. Temp', name: 'tempMin' },
       { header: 'Max. Temp', name: 'tempMax' },
       { header: 'Day Temp', name: 'tempDay' },
       { header: 'Night Temp', name: 'tempNight' }
    ];

    it('should render the component', () => {
      const wrapper = shallow(<Home />)
      expect(wrapper.exists()).toBe(true);
    })

    it('should render the component classname', () => {
      const wrapper = shallow(<Home />)
      const elmClassname  = wrapper.find('.container');
      expect(elmClassname.length).toBe(1)
    })

    it('should render the select element', () => {
      const wrapper = shallow(<Home />)
      const buttonElement  = wrapper.find('select');
      expect(buttonElement.length).toBe(1)
    })

    it('should render the textbox element', () => {
      const wrapper = shallow(<Home />)
      const buttonElement  = wrapper.find('#city');
      expect(buttonElement.length).toBe(2)
    })

    it('should render the datepicker element', () => {
      const wrapper = shallow(<Home />)
      const buttonElement  = wrapper.find('#updatedDate');
      expect(buttonElement.length).toBe(1)
    })

    it('should render the table classname', () => {
      const wrapper = shallow(<Home />)
      const elmClassname  = wrapper.find('.displayTable');
      expect(elmClassname.length).toBe(1)
    })

    it('should render the table', () => {
      const wrapper = shallow(<Home />)
      const table  = wrapper.find('table');
      expect(table).toHaveLength(1)
    })

    it('should render the thead', () => {
      const wrapper = shallow(<Home />)
      const thead  = wrapper.find('thead');
      expect(thead).toHaveLength(1)
    })

    it('should render the table column count', () => {
      const wrapper = shallow(<Home />)
      const thead  = wrapper.find('thead');
      const headers = thead.find('th');
      expect(headers).toHaveLength(cols.length);
    })

    it('should render the tbody', () => {
      const wrapper = shallow(<Home />)
      const thead  = wrapper.find('tbody');
      expect(thead).toHaveLength(1)
    })
  })