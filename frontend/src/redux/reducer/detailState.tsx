
import { GET_STATES_DETAIL } from '../action/actionState';

const initialState = {
	detailStates: {},	
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function detailStateReducer(state = initialState, action: any) {
	switch (action.type) {
		case GET_STATES_DETAIL:
			return {
				detailStates: action.payload
			}
		default:
			return state;
	}
}