import React from 'react';
import { shallow } from 'enzyme';
import { SchoolCard, mapStateToProps } from '../Containers/SchoolCard';

jest.mock('../apiCalls/apiCalls.js');

describe('Card', () => {
  let schoolWrapper, schoolsWrapper, mockSchools, mockSchoolName;

  beforeEach(() => {
    
    mockSchools = [{
      school_id: "064215006903",
      schoolName: "Helen Stacey Middle",
      phone: "(714) 894-7212",
      address:  "6311 Larchwood Dr.",
      distance: 20
    }];
    
    schoolsWrapper = shallow(
      <SchoolCard 
      school_id={mockSchools.school_id}
      school_name={mockSchools.schoolName}
      phone={mockSchools.phone}
      address={mockSchools.address}
      distance={mockSchools.distance}
    />) 
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(schoolWrapper).toMatchSnapshot();
  });

});

 describe('mapStateToProps', () => {
  it('should return an object with school data', () => {

    const mockState = {
      error: '',
      schools: [
        {
          school_id: "064215006903",
          schoolName: "Helen Stacey Middle",
          phone: "(714) 894-7212",
          address:  "6311 Larchwood Dr.",
          distance: 20
        }
      ]
    }

    const expectedState = {
      schools: [
        {
          school_id: "064215006903",
          schoolName: "Helen Stacey Middle",
          phone: "(714) 894-7212",
          address: {
            "latLong": {
              "latitude": 33.747461,
              "longitude": -118.01877
            },
            "street": "6311 Larchwood Dr.",
            "city": "Huntington Beach",
            "state": "CA",
            "stateFull": "California",
            "zip": "92647",
            "zip4": "2320",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Huntington+Beach/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/92647/search.aspx",
            "html": "6311 Larchwood Dr.<br />Huntington Beach, CA 92647-2320"
          },
          distance: 20
        }
      ],
      error: ''
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expectedState)
  });
});