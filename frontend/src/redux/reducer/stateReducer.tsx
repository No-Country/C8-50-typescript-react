
import { GET_STATES } from '../action/actionState';

const initialState = {
	listaStates: [],	
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function stateReducer(state = initialState, action: any) {
	switch (action.type) {
		case GET_STATES:
			return {
				listaStates: action.payload,
			};
		default:
			return state;
	}
}
