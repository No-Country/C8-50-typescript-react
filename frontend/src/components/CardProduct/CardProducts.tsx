import Photo from '../../assets/img/photo-2.jpg';
import {
	ProductList,
	ProductCard,
	Content,
} from '../../styled-components/styled.cardsProduct';
import { FaShoppingCart, FaRegBookmark } from 'react-icons/fa';
function CardProducts(): any {
	return (
		<ProductList>
			<ProductCard>
				<img src={Photo} className='productCard' alt='img-products' />

				<FaShoppingCart className='shopping' />
				<FaRegBookmark className='bookmark' />
				<Content>
					<h3>Edificio name ubicado en ela zoba de </h3>
					<div className='stack-one'>
						<div>precio</div>
						<div className='price'>$2135</div>
					</div>
					<div className='stack-two'>
						<div className='rating'>rosario</div>
					</div>
					<div className='time'>3hs publicado</div>
				</Content>
			</ProductCard>
		</ProductList>
	);
}

export default CardProducts;
