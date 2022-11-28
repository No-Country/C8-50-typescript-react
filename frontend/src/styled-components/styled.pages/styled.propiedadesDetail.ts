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
padding: .5rem;
`

export const NamePropiedad = styled.p`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	font-size: 1.1rem;
	font-weight: bolder;
  margin-top: 2rem;
`;

export const MaterialSymbolsoutlined = styled.span`
	font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;
`;
