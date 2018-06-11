import { EXAMPLE_ACTION } from '../actions/types';

//Set up an initial state for this reducer
const INITIAL_STATE = {
    randomText: ''
}

export const ExampleReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EXAMPLE_ACTION: {
            return { ...state, randomText: action.payload } // Change the current state
        }
        default:
            return { state }; //Nothing must be changed
    }
}