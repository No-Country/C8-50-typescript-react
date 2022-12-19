import axios from 'axios';
/* import swal from 'sweetalert'; */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const local_url = 'http://localhost:3001/api';

export const GET_STATES = 'GET_STATES';
export const GET_STATES_DETAIL = 'GET_STATES_DETAIL';
export const FIND_COMENT_IN_STATES = 'FIND_COMENT_IN_STATES';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getState() {
	return async function (dispatch: any) {
		console.log('Ingreso a GET RealState');
		const { data } = await axios('http://localhost:3001/api/realEstate');
		console.log(data, 'actualizado');
		dispatch({ type: GET_STATES, payload: data.data });
	};
}
export function getDetailsState(id: string) {
  return async function (dispatch: any) {
    const { data } = await axios('http://localhost:3001/api/realEstate/'+id);
    dispatch({ type: GET_STATES_DETAIL, payload: data.data });
  };
}
export function findComentinRealState(id: string) {
	return async function (dispatch: any) {
		const { data } = await axios('http://localhost:3001/api/realEstate/coment/'+id);
		dispatch({ type: FIND_COMENT_IN_STATES, payload: data})
	}
}
