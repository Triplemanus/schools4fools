import React from 'react';
import { shallow } from 'enzyme';
import { SchoolCardContainer, mapStateToProps } from '../Containers/SchoolCardContainer';

describe("CardContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SchoolCardContainer
        schools={[]}
        error=""
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("mapStateToProps", () => {
  it("should return an object with the contents of the store", () => {
    const mockStore = {
      error: "",
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
    };

    const expectedState = {
      error: "",
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
    };

    const testProps = mapStateToProps(mockStore);

    expect(testProps).toEqual(expectedState);
  });
});