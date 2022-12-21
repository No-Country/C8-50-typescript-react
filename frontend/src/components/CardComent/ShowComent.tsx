import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findComentinRealState } from '../../redux/action/actionState';
import { RootState } from '../../redux/store';
/* import { coment } from '../../interface/coment'; */
import useBoolean from '../../hooks/useBoolean';
import CardComent from './CardComent';

function ShowComent({ id }: any): any {
	const dispatch = useDispatch();
	const comentdetail = useSelector<RootState, any>(
		state => state.comentState.detailComent
	);
	const [loading, setLoading] = useBoolean(false);
	const [error, setError] = useBoolean(false);
	useEffect(() => {
		setLoading.on();
		dispatch<any>(findComentinRealState(String(id)))
			.then((response: any) => response)
			.catch(() => {
				setError.on();
			})
			.finally(() => setLoading.off());
	}, [dispatch, id]);

	console.log(comentdetail, 'ShowComent');
	return <>
				{error ? 'Ubo un Error' : null}
			{loading ? (
				'Cargando'
			) : ( comentdetail.comment?.map((r:any)=>  (<div key={r.id}><CardComent coment={r}/></div>)) )}
	</>;
}

export default ShowComent;
