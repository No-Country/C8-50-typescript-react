import { FIND_COMENT_IN_STATES } from "../action/actionState";

const initialStates = {
	detailComent: {},	
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function detailsComentReducer(state = initialStates, action: any){
    switch(action.type){
        case FIND_COMENT_IN_STATES: 
        return {
            detailComent: action.payload
        }
        default:
            return state
    }
}