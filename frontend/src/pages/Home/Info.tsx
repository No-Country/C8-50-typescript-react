import {
	Gallery,
	ImageGallery,
	CardInfo,
	Title,
	P,
	Btn,
} from '../../styled-components/styled.info';
import Photo from '../../assets/img/photo-1.jpg';
import Photo2 from '../../assets/img/photo-2.jpg';
import Photo3 from '../../assets/img/photo-3.jpg';

function Info(): any {
	return (
		<Gallery>
			<ImageGallery src={Photo} />
			<ImageGallery src={Photo2} />
			<ImageGallery src={Photo3} />
			<CardInfo>
				<Title>Un lugar donde descansar</Title>
				<P>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
					suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Sit, unde!
				</P>
				<Btn>Ver propiedades</Btn>
			</CardInfo>
		</Gallery>
	);
}

export default Info;
