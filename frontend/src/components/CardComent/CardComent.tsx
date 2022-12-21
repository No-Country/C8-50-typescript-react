import {
	ComentCardStyle,
	Content,
} from '../../styled-components/styled.cardsShowComent';

function cardComent({ coment }: any): any {
	console.log(!coment.length, 'tamaño de lenth');
	const length = !coment.length;
	return (
		<>
			{length ? (
				<ComentCardStyle>
					<Content>
						<img src={coment.user.img} alt={coment.user.img}></img>
						<h4>{coment.user.email}</h4>
					</Content>
					<h5>{coment.comment}</h5>
				</ComentCardStyle>
			) : (
				'No Hay Comentarios'
			)}
		</>
	);
}

export default cardComent;
