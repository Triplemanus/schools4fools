export const isLoading = isLoading => ({
  type: 'IS_LOADING'
});

export const getAllSchools = (schools) => ({
  type: 'GET_SCHOOLS',
  schools
});

export const hasErrored = errorMsg => ({
  type: 'HAS_ERRORED',
  errorMsg
});

export const addSchools = schools => ({
  type: 'ADD_SCHOOLS',
  schools
});