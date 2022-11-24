import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoImg = styled.img`
	width: 75px;
	margin: 0 auto;
`;
export const Nav = styled.nav`
	background: #e6efe8;
	height: 65px;
	display: flex;
	justify-content: space-between;
	padding: 0.2rem;
`;

export const NavLink = styled(Link)`
	color: #808080;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	.active {
		color: #000000;
	}
`;

export const Bars = styled.div`
	display: none;
	color: #808080;
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: #e9e9e9ed;
	padding: 10px 22px;
	color: #000000;
	outline: none;
	border: none;
	cursor: pointer;
`;
