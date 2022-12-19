
import {
	ProductCard,
	Content,
} from '../../styled-components/styled.cardsProduct';
import { FaShoppingCart, FaRegBookmark } from 'react-icons/fa';
import { State } from '../../interface/state';
import { Link } from 'react-router-dom';
import { formatoMoney } from '../../hooks/useFormatNumber';
function CardProducts(state: State): any {
	return (
			<ProductCard>
				<img src={state.image} className='productCard' alt='img-products' />

				<FaShoppingCart className='shopping' />
				<FaRegBookmark className='bookmark' />
				<Content>
					<h3>{state.description} </h3>
					<div className='stack-one'>
						<div>precio</div>
						<div className='price'>{formatoMoney(state.price)}</div>
					</div>
					<Link to={`/details/${state.id}`} >Detalles</Link>
	
				</Content>
			</ProductCard>
		
	);
}

export default CardProducts;
