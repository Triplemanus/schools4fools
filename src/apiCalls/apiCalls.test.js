import { getSchoolDetails, fetchAllSchools } from './apiCalls';

describe ('getSchoolDetails', () => {

    let mockResponse, mockQuery;
  
    beforeEach(() => {
      mockQuery = '064215006903';
      mockResponse = {
        "schoolid": "064215006903",
        "schoolName": "Helen Stacey Middle",
        "phone": "(714) 894-7212",
        "url": "https://www.schooldigger.com/go/CA/schools/4215006903/school.aspx",
        "urlCompare": "https://www.schooldigger.com/go/CA/schools/4215006903/search.aspx",
        "address": {
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
        }
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it('should call fetch with the correct Url', () => {
      getSchoolDetails(mockQuery);
  
      expect(window.fetch).toHaveBeenCalledWith(`https://api.schooldigger.com/v1.2/schools/064215006903?appID=d04b0481&appKey=0c80520db8adfa4e8be1ea61724e1f24`)
    });
  
    it('should return an array of albums (Happy Path) :)', () => {
      getSchoolDetails(mockQuery)
      .then(results => expect(results).toEqual(mockResponse));
    });
  
    it('should return an error (Sad Path) :(', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
  
      expect(getSchoolDetails(mockQuery)).rejects.toEqual(Error('There was an error getting your school data.'));
    });
  
    it('should return an error if the promise rejects :(', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          message: 'There was an error getting your school data.'
        });
      });
  
      expect(getSchoolDetails(mockQuery)).rejects.toEqual({ message: 'There was an error getting your school data.' })
    });
  });



  it('should return detailed info for a given school id', () => {

});