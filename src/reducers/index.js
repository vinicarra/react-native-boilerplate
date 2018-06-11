import { combineReducers } from 'redux';

/* Import all reducers and combine them to a single one */
import { ExampleReducer } from './ExampleReducer';

export default combineReducers({
    ExampleReducer: ExampleReducer
});