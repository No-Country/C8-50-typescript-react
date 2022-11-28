import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Data = styled.div`
	height: 80vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	padding: 25px;
	align-items: center;
	@media screen and (max-width: 400px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
export const PageContainer = styled.div`
	padding: 25px;
	margin: auto;
	width: 80%;
	border-radius: 10px;
	box-shadow: 0 10px 25px 5px rgba(0, 0, 0, 0.2);
	background-color: #f6f0f0db;
`;

export const BasicInfo = styled.div`
	margin: auto;
`;

export const UserAvatar = styled.div`
	margin: auto;
	top: 40px;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: 1px solid #15151509;
	background: white;
	overflow: hidden;
`;

export const ImgAv = styled.img`
	border-radius: 150px;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const UserName = styled.h2`
	text-align: center;
	text-transform: capitalize;
`;
export const Personal = styled.h6`
	margin-bottom: 5px;
	font-weight: 400;
	text-transform: uppercase;
	color: #4d4949;
`;
export const Info = styled.div`
	justify-content: center;
	flex-direction: column;
`;
export const DataUser = styled.div`
	text-align: center;
`;
export const Edit = styled.div`
	margin: auto;
	padding: 25px;

	margin-bottom: 5px;
	text-transform: uppercase;
	color: #4d4949;
	text-align: center;
`;
export const NavLink = styled(Link)`
	width: 200px;
	color: #fff;
	padding: 0 20px 0 20px;
	background-color: blue;
	text-decoration: none;
	font-weight: 700;
	font-size: 18px;
	border-radius: 5px;
	border: 1px solid blue;
	&:hover {
		text-decoration: underline;
		color: crimson;
	}
`;

export const Saved = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Buttons = styled.button`
	width: 200px;
	background-color: blue;
	color: #fff;
	border-radius: 5px;
	padding: 10px;
	margin: 15px;
	font-weight: 400;
	font-size: 18px;
	border: none;
	cursor: pointer;
	&:hover {
		background-color: violet;
	}
`;
