import { EXAMPLE_ACTION } from './types';

export const exampleAction = () => {
    return dispatch => {
        //... API CALLS
        dispatch({ type: EXAMPLE_ACTION, payload: 'boilerplate' });
    }
}