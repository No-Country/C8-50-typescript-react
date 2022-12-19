/* import { coment } from "../../interface/coment"; */

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findComentinRealState } from '../../redux/action/actionState';
import { RootState } from '../../redux/store';
import { coment } from '../../interface/coment';
import useBoolean from '../../hooks/useBoolean';

function CardComent({ coment }: any): any {
	const { id } = useParams();
	const dispatch = useDispatch();
	const comentdetail = useSelector<RootState, coment>(
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

	console.log(comentdetail, 'CardComent');
	return <>
				{error ? 'Ubo un Error' : null}
			{loading ? (
				'Cargando'
			) : ( <div>a</div> )}
	</>;
}

export default CardComent;
