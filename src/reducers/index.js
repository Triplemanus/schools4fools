import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { errorMsg } from './errorMsg';
import { getAllSchools } from './getAllSchools';
import { addSchools } from './addSchools';

export const rootReducer = combineReducers({
  errorMsg,
  isLoading,
  getAllSchools,
  addSchools
});