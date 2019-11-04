import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';

describe('App', () => {
  let wrapper, mockSchool;

  beforeEach(() => {
   
    mockSchool = [
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
    ]

    wrapper = shallow(<App
      school={mockSchool}
    />);
  });

  it('should match the snapshot with all data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });
});

describe ('mapStateToProps', () => {

  it('should return an object with the current school', () => {
    const mockState = {
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
      error: ''
    };

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

      expect(mapStateToProps(mockState).schools).toEqual(expectedSchools);

  })
})

