import { getAllSchools } from './getAllSchools';

describe('getAllSchools', () => {

  it('should return the default state', () => {
    let expected = [];
    let result = getAllSchools(undefined, {});
    expect(result).toEqual(expected)
  });

  it('should return the action\'s schools', () => {
    let mockAction = {
      type: 'GET_SCHOOLS',
      schools: [
        { id: 100, name: 'Helen Stacey Middle' },
        { id: 200, title: 'George Washington High' }
      ]
    };
    let expected = [
      { id: 100, name: 'Helen Stacey Middle' },
      { id: 200, title: 'George Washington High' }
    ]

    let result = getAllSchools([], mockAction);
    expect(result).toEqual(expected)
  });
});