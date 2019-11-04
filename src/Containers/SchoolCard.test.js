import React from 'react';
import { shallow } from 'enzyme';
import { SchoolCard, mapStateToProps, mapDispatchToProps } from '../Containers/SchoolCard';

jest.mock('../apiCalls/apiCalls.js')

describe('Card', () => {
  let schoolWrapper, schoolsWrapper, mockSchools, mockSchoolName;

  beforeEach(() => {
    
    mockSchools = [{
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


//   it('should call deleteFavorite when isFavorite is true', () => {

//     const mockEvent = { preventDefault: jest.fn() }

//     favoriteWrapper.find('button').simulate('click', mockEvent)

//     expect(deleteFavorite).toHaveBeenCalled();
//   });

//   it('should call postFavorite when isFavorite is false', () => {
//     const mockEvent = {preventDefault: jest.fn()}

//     newFavoriteWrapper.find('img').at(0).simulate('click', mockEvent);

//     expect(invalidUser).toHaveBeenCalled();
//     expect(postFavorite).toHaveBeenCalled();
//   });

//   it('should call isUserLoggedIn on a button click', () => {
    
//     albumWrapper.isUserLoggedIn = jest.fn();
//     let mockEvent = {preventDefault: jest.fn()}

//     albumWrapper.find('button').at(0).simulate('click', mockEvent);

//     expect(albumWrapper.isUserLoggedIn).toHaveBeenCalledWith(mockEvent);
//   });

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