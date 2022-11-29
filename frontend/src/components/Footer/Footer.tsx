import {
	FooterDiv,
	Div,
	Figure,
	Title,
	Social,
	Paragraph,
	DivEnd,
	Small,
	Box,
	Logo,
} from '../../styled-components/styled.footer';
import LogoImage from '../../assets/img/logo.png';

function Footer(): any {
	return (
		<div>
			<FooterDiv>
				<Div>
					<Box>
						<Figure>
							<Social to='#'>
								<Logo src={LogoImage} alt='logo de la empresa' />
							</Social>
						</Figure>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
							possimus.
						</Paragraph>
					</Box>
					<Box>
						<Title>Links</Title>
						<Paragraph>
							<Social to='/'>Inicio</Social>
						</Paragraph>
						<Paragraph>
							<Social to='#'>Propiedades</Social>
						</Paragraph>
						<Paragraph>
							<Social to='#'>About</Social>
						</Paragraph>
						<Paragraph>
							<Social to='#'>Contacto</Social>
						</Paragraph>
					</Box>
					<Box>
						<Title>Contacto</Title>
						<Paragraph>inmobiliario@zavalla.com</Paragraph>
						<Paragraph>calle 123, Rosario</Paragraph>
						<Paragraph>0800-999-234</Paragraph>
					</Box>
					<Box>
						<Title> Siguenos</Title>
						<Social to='/'>WA</Social>
						<Social to='#'>TW</Social>
						<Social to='#'>FC</Social>
						<Social to='#'>IG</Social>
					</Box>
				</Div>
				<DivEnd>
					<Small>&copy; 2022 - Todos los derechos reservados</Small>
				</DivEnd>
			</FooterDiv>
		</div>
	);
}

export default Footer;
