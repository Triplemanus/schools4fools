export const getAllSchools = (state=[], action) => {
  switch(action.type) {
    case 'GET_SCHOOLS':
      console.log('GET_SCHOOLS');
      return action.schools;
    default: 
      return state;
  }
}