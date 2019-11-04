import { addSchools } from './addSchools';

describe('addSchools', () => {

  it('should return the default state', () => {
    let expected = [];
    let result = addSchools(undefined, {});
    expect(result).toEqual(expected)
  });

  it('should return the action\'s schools', () => {
    let mockAction = {
      type: 'ADD_SCHOOLS',
      schools: [
        { id: 100, name: 'Helen Stacey Middle' },
        { id: 200, title: 'George Washington High' }
      ]
    };
    let expected = [
      { id: 100, name: 'Helen Stacey Middle' },
      { id: 200, title: 'George Washington High' }
    ]

    let result = addSchools([], mockAction);
    expect(result).toEqual(expected)
  });
});
