import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterDiv = styled.footer`
	width: 100%;
	margin-top: 50px;
	background-color: #05101d;
	border-radius: 25px 0 0 0;
`;

export const Div = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 50px;
	padding: 45px 0px;
	@media (max-width: 768px) {
		width: 90%;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 30px;
		padding: 35px 0px;
	}
`;

export const Figure = styled.figure`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Logo = styled.img`
	width: 100px;
`;

export const Title = styled.h2`
	color: #fff;
	margin-bottom: 25px;
	font-size: 20px;
`;

export const Paragraph = styled.p`
	color: #e8e8e8f2;
	margin-bottom: 5px;
	margin-left: 5px;
`;

export const Social = styled(Link)`
	display: inline-block;
	text-decoration: none;
	line-height: 45px;
	color: #e8e8e8f2;
	margin-right: 10px;
	text-align: center;
	cursor: pointer;
	transition: all 300ms ease;
	&:hover {
		color: aqua;
	}
`;

export const DivEnd = styled.div`
	background-color: #0a1a2a;
	padding: 15px 10px;
	text-align: center;
	color: #fff;
`;
export const Small = styled.small`
	font-size: 15px;
`;

export const Box = styled.div`
	width: 100%;
`;
