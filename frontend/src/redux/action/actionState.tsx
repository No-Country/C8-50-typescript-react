import axios from "axios";
/* import swal from 'sweetalert'; */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const local_url = "http://localhost:3001/api";

export const GET_STATES = "GET_STATES";

export function getState() {
  return async function (dispatch: any) {
    console.log("Ingreso a GET RealState")
    const { data } = await axios('http://localhost:3001/api/realEstate');
    console.log(data, "actualizado");
    dispatch({ type: GET_STATES, payload: data.data });
  };
}
