import { isLoading, addSchools, hasErrored, getAllSchools } from './index';

describe ('ACTIONS', () => {
  it ('should have a type of ADD_SCHOOLS', () => {

    let schools = {
      artistId: 150627775,
      artistName: "Fat Joe & Remy Ma",
      collectionName: "All the Way Up (feat. French Montana & Infared) - Single"
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
      type: 'IS_LOADING'
    };

    expect(isLoading()).toEqual(expectedAction);

  });

  it('should have a type of HAS_ERRORED', () => {
    let errorMsg = 'These are not the schools you\'re looking for.';

    let expectedAction = {
      type: 'HAS_ERRORED',
      errorMsg: 'These are not the schools you\'re looking for.'
    }
      expect(hasErrored()).toEqual(expectedAction);
    
  });
})