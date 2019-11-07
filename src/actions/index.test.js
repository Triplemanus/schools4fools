import { isLoading, addSchools, hasErrored, getAllSchools } from './index';

describe ('ACTIONS', () => {
  it ('should have a type of ADD_SCHOOLS', () => {

    let schools = {
      schoolId: 150627775,
      schoolName: "George Washington High",
      schoolAddress: "925 S Monaco Parkway"
    };

    let expectedAction = {
      type: "ADD_SCHOOLS",
      schools
    };

    expect(addSchools(schools)).toEqual(expectedAction)
  });

  it('should have a type of isLoading', () => {
    let isLoading = true;

    let expectedAction = {
      type: "IS_LOADING",
      isLoading: isLoading
    };

    expect(isLoading()).toEqual(expectedAction);

  });

  it('should have a type of HAS_ERRORED', () => {
    let errorMsg = 'These are not the schools you are looking for.';

    let expectedAction = {
      type: 'HAS_ERRORED',
      errorMsg: 'These are not the schools you are looking for.'
    }
      expect(hasErrored(errorMsg)).toEqual(expectedAction);
    
  });
})