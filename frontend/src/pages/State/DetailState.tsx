import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { RootState } from '../../redux/store';
import { StateDetails } from '../../interface/state';
import { getDetailsState } from '../../redux/action/actionState';
import {
	Content,
	ProductCard,
	ProductList,
} from '../../styled-components/styled.cardsDetail';
import { FaRegBookmark, FaShoppingCart } from 'react-icons/fa';
import useBoolean from '../../hooks/useBoolean';
import { formatoMoney } from '../../hooks/useFormatNumber';
import CardComent from '../../components/CardComent/CardComent';

function RealstateHome(): any {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [loading, setLoading] = useBoolean(false);
	const [errors, setErrros] = useBoolean(false);
	const detail = useSelector<RootState, StateDetails>(
		state => state.detailstate.detailStates
	);
	useEffect(() => {
		setLoading.on();
		dispatch<any>(getDetailsState(String(id)))
			.then((response: any) => response)
			.catch(() => {
				setErrros.on();
			})
			.finally(() => setLoading.off());
		console.log(detail);
	}, [dispatch, id]);
	console.log(detail, 'detail');
	return (
		<>
			{errors ? 'Ubo un Error' : null}
			{loading ? (
				'Cargando'
			) : (
				<ProductList>
					<ProductCard>
						<img
							src={detail.image}
							className='productCard'
							alt='img-products'
						/>

						<FaShoppingCart className='shopping' />
						<FaRegBookmark className='bookmark' />
						<Content>
							<h2>
								{detail.name} - {detail.city}
							</h2>
							<div className='stack-one'>
								<div>precio</div>
								<div className='price'>{formatoMoney(detail.price)}</div>
							</div>
							<h4>Caracteristicas</h4>
							<p>
								<ul>
									{detail.quantity
										? Object.values(detail.quantity).map((r: any) => (
												<li key={r.id}>
													{r.quantity} - {r.feature.title}
												</li>
										  ))
										: 'no Hay Datos'}
								</ul>
							</p>
						</Content>
					</ProductCard>
									<CardComent coment={detail.id} />

				</ProductList>
			)}
		</>
	);
}

export default RealstateHome;
