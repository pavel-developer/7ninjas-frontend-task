import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import mockItems from './items';

const rootReducers = combineReducers({
  mockItems,
  form: formReducer
});

export default rootReducers;
