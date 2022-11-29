import styled from 'styled-components';

export const NavbarRouter = styled.nav`
	background-color: #3d4cd7;
	color: white;
	box-shadow: 0px 4px 4px 0px #00000040;
	height: 35px;
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	gap: 0.3rem;
`;

export const TextNavbar = styled.button`
	border: none;
	background-color: transparent;
	font-size: 0.9rem;
	padding: 0 2px;
	color: white;
	cursor: pointer;
`;
export const SpanNavbar = styled.span`
	font-size: 0.9rem;
	padding: 0 2px;
	cursor: pointer;
`;

export const Main = styled.main`
	padding: 0.5rem;
`;

export const NamePropiedad = styled.p`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	font-size: 1.1rem;
	font-weight: bolder;
	margin-top: 2rem;
`;

export const DivIcons = styled.div`
	display: flex;
	flex-direction: row;
	width: 90px;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;

export const DivTitle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: end;
`;
export const Propertydata = styled.section`
	border: 4px solid #3d4cd74d;
	box-shadow: 0px 4px 4px 0px #00000040;
	border-radius: 10px;
	max-width: 700px;
	padding: 0.5rem;
`;
export const VerifiedProperty = styled.p`
	margin: 0;
	color: #3d4cd7; ;
`;
export const TitleData = styled.h1`
	margin: 0;
	color: #000000bf;
	font-size: 1.4rem;
`;

export const BasicInformation = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
export const TypePropetary = styled.p`
	margin: 0;
`;
export const IDPropetary = styled.p`
	margin: 0;
`;
export const Container = styled.div`
	width: 45px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2px;
`;
export const ContainerDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const DivCotainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 61px);
	width: 183px;
`;
export const TitleTex = styled.p`
	grid-column: span 3;
	margin: 0;
	margin-bottom: 1rem;
`;
export const Number = styled.p`
	margin: 0;
	font-weight: bold;
`;
export const Text = styled.p`
	margin: 0;
	background: linear-gradient(0deg, #000000, #000000),
		linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
	font-weight: bold;
`;

export const PropiedadInfo = styled.p`
	font-weight: bold;
	margin: 0;
`;
export const Div = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
export const MaterialSymbolsoutlined = styled.span`
	font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;
`;
export const DivDirection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const Hr = styled.hr`
	margin-bottom: 2rem;
`;
