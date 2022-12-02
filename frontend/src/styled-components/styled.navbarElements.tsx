import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoImg = styled.img`
	width: 65px;
	margin: 0 auto;
`;
export const Nav = styled.nav`
	background-color: #fcfcfc;
	height: 60px;
	display: flex;
	justify-content: space-between;
	padding: 0.3rem;
	margin: 0.3rem;
	border-radius: 5px;
	box-shadow: -2px 7px 7px 1px rgba(66, 64, 64, 0.4);
	.burguer {
		@media (min-width: 768px) {
			display: none;
		}
	}
`;

export const NavLink = styled(Link)`
	color: #808080;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #000000;
	}
`;

export const Bars = styled.div`
	display: none;
	color: #808080;
`;

export const NavMenu = styled.div`
	div {
		display: flex;
		align-items: center;
		padding: 0.4rem;
		justify-content: space-between;
		z-index: 1;
	}
	.links {
		position: absolute;
		top: -700px;
		left: -2000px;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		margin: 5px;

		a {
			font-size: 2rem;
			display: block;
			margin: 1rem;
		}
		@media (min-width: 768px) {
			position: initial;
			margin: 0;
			a {
				font-size: 1.2rem;
				display: inline;
				margin: 2px;
			}
		}
	}
	@media (max-width: 768px) {
		.links.active {
			width: 100%;
			display: block;
			position: absolute;
			margin-left: auto;
			margin-right: auto;
			margin-top: 5px;
			top: 20%;
			left: 0;
			right: 0;
			text-align: center;
			z-index: 3;
		}
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	flex-direction: column;
	span {
		color: #3a3737f5;
		outline: none;
		border: none;
		font-size: 0.7rem;
		font-weight: bold;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: #fcfcfc;
	padding: 1px 22px;
	color: #000000;
	outline: none;
	border: none;
	cursor: pointer;
`;

export const Burger = styled.div`
	padding: 5px;
	.nav-icon-5 {
		width: 35px;
		height: 30px;
		margin: 10px 10px;
		position: relative;
		cursor: pointer;
		display: inline-block;
	}
	.nav-icon-5 span {
		background-color: blue;
		position: absolute;
		border-radius: 2px;
		transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
		width: 100%;
		height: 4px;
		transition-duration: 500ms;
	}
	.nav-icon-5 span:nth-child(1) {
		top: 0px;
		left: 0px;
	}
	.nav-icon-5 span:nth-child(2) {
		top: 13px;
		left: 0px;
		opacity: 1;
	}
	.nav-icon-5 span:nth-child(3) {
		bottom: 0px;
		left: 0px;
	}
	.nav-icon-5:not(.open):hover span:nth-child(1) {
		transform: rotate(-3deg) scaleY(1.1);
	}
	.nav-icon-5:not(.open):hover span:nth-child(2) {
		transform: rotate(3deg) scaleY(1.1);
	}
	.nav-icon-5:not(.open):hover span:nth-child(3) {
		transform: rotate(-4deg) scaleY(1.1);
	}
	.nav-icon-5.open span:nth-child(1) {
		transform: rotate(45deg);
		top: 13px;
	}
	.nav-icon-5.open span:nth-child(2) {
		opacity: 0;
	}
	.nav-icon-5.open span:nth-child(3) {
		transform: rotate(-45deg);
		top: 13px;
	}
`;

export const BgDiv = styled.div`
	position: absolute;
	background-color: #bad9f4;
	top: -700;
	left: -1000;
	margin-top: 65px;
	transition: all 0.5s ease;
	@media (max-width: 768px) {
		&.active {
			border-radius: 0 0 40% 0;
			top: 0;
			left: 0;
			width: 100%;
			height: 90vh;
			z-index: 2;
		}
	}
`;
