import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm, mapStateToProps, mapDispatchToProps } from './SearchForm';
import { fetchAllSchools } from '../apiCalls/apiCalls';

import { addSchools } from '../actions/index'; 

jest.mock('../apiCalls/apiCalls.js');

describe('SearchForm', () => {
  let wrapper, mockSchool, mockAddSchools;

  beforeEach(() => {
    mockSchool = null;
    mockAddSchools = jest.fn();
    wrapper = shallow(<SearchForm 
    school={mockSchool}
    addSchools={mockAddSchools}
    />);

    fetchAllSchools.mockImplementation(() => {
      return Promise.resolve([{
        school_id: "080336006756",
        key: "080336006756",
        school_name: "George Washington",
        phone: '303.399.4532',
        address: '1234 S Monaco St.',
        distance: 5.8,
        low_Grade: '9',
        high_Grade: '12',
        level: 'High',
        is_Charter: false,
        is_Magnet: false,
        is_Private: false
      }])
    })
  });

  it('should match the snapshot with all data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });
  
  it('should update state on a change in an input', () => {
    
    const mockEvent = { target: { name: 'level', value: 'High' } };
    const mockEventDistance = { target: { name: 'distance', value: 20 } }
    
    wrapper.find('input').at(2).simulate('change', mockEvent);
    wrapper.find('input').at(4).simulate('change', mockEventDistance);
    
    expect(wrapper.state('level')).toEqual(['High']);
    expect(wrapper.state('distance')).toEqual([20]);
  });

  it('should call handleSubmit on a button click', () => {

    const mockEvent = {target: {name: 'locState', value: 'CO'}}

    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });

  it('should update the state when clearInputs is called', () => {

    const expected = '';

    wrapper.setState({
      locState: 'CO',
      error: 'These are not the schools you are looking for.'
    });

    wrapper.instance().clearInputs();

    expect(wrapper.state('locState')).toEqual(expected);
    expect(wrapper.state('error')).toEqual(expected);
  });

  it('should run searchSchools on a button click', () => {
    const mockEvent = { preventDefault: jest.fn() }

    wrapper.instance().searchSchools = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().searchSchools).toHaveBeenCalled();
  });
});

describe('mapStateToProps', () => {

  it('should return an object with the current school', () => {
    const mockState = {
      error: '',
      schools: [
        {
          school_id: "080336006756",
          key: "080336006756",
          school_name: "George Washington",
          phone: '303.399.4532',
          address: '1234 S Monaco St.',
          distance: 5.8,
          low_Grade: '9',
          high_Grade: '12',
          level: 'High',
          is_Charter: false,
          is_Magnet: false,
          is_Private: false
        }
      ],
    }

    const expectedSchools =  [{
      school_id: "080336006756",
      key: "080336006756",
      school_name: "George Washington",
      phone: '303.399.4532',
      address: '1234 S Monaco St.',
      distance: 5.8,
      low_Grade: '9',
      high_Grade: '12',
      level: 'High',
      is_Charter: false,
      is_Magnet: false,
      is_Private: false
    }];

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps.schools).toEqual(expectedSchools)
  });
});

describe('mapDispatchToProps', () => {

  it('should dispatch addSchools when called', () => {
    const mockSchools = {
      school_id: "080336006756",
      key: "080336006756",
      school_name: "George Washington",
      phone: '303.399.4532',
      address: '1234 S Monaco St.',
      distance: 5.8,
      low_Grade: '9',
      high_Grade: '12',
      level: 'High',
      is_Charter: false,
      is_Magnet: false,
      is_Private: false
    }
    const mockDispatch = jest.fn();
    const actionToDispatch = addSchools(mockSchools);
  
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addSchools({
      school_id: "080336006756",
      key: "080336006756",
      school_name: "George Washington",
      phone: '303.399.4532',
      address: '1234 S Monaco St.',
      distance: 5.8,
      low_Grade: '9',
      high_Grade: '12',
      level: 'High',
      is_Charter: false,
      is_Magnet: false,
      is_Private: false
    });
  
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });


  it('should get schools from api when fetchAllSchools is called', async () => {
    const wrapper = shallow(<SearchForm/>);
    const mockSchools = [{
      school_id: "080336006756",
      key: "080336006756",
      school_name: "George Washington",
      phone: '303.399.4532',
      address: '1234 S Monaco St.',
      distance: 5.8,
      low_Grade: '9',
      high_Grade: '12',
      level: 'High',
      is_Charter: false,
      is_Magnet: false,
      is_Private: false
    }];
    const mockState = {"errorMsg": "", "latLocation": "", "level": "", "locState": "", "longLocation": "", "maxDistance": "", "render": false}
    const mockQuery = {   locState: 'CO',
    level: 'High',
    latLocation: '34.7838456',
    longLocation: '-104.7864334',
    maxDistance: '20'
  }
    const expectedSchools = [{
      school_id: "080336006756",
      key: "080336006756",
      school_name: "George Washington",
      phone: '303.399.4532',
      address: '1234 S Monaco St.',
      distance: 5.8,
      low_Grade: '9',
      high_Grade: '12',
      level: 'High',
      is_Charter: false,
      is_Magnet: false,
      is_Private: false
    }];

    expect(wrapper.state()).toEqual(mockState);

    await wrapper.instance().searchSchools(mockQuery);

    expect(wrapper.state()).toEqual(mockState)
  })
});