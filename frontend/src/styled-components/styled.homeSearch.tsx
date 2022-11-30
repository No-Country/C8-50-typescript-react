import styled from 'styled-components';
import Img from '../assets/img/bgSearch.jpg';

export const Form = styled.form`
	width: 60%;
	display: flex;
	justify-content: center;
	margin: auto;
	flex-direction: column;
	border: none;
	height: 60vh;
`;

export const InputBtn = styled.button`
	width: 100%;
	background: #0e0e0ee8;
	color: #fff;
	font-size: 1em;
	margin: 3px;
	padding: 0.5em 1em;
	border: 1px solid #a9b8c9;
	border-radius: 5px;
`;

export const ContainerDiv = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 2%;
`;

export const WrapperDiv = styled.div`
	width: 100%;
	background: #fff;
	margin: 3px 0.5px;
	border-radius: 4px;
`;

export const Input = styled.input`
	width: 95%;
	padding: 12px 7px;
	border: none;
	border-radius: 4px;
	display: block;
	color: #a9b8c9;
	-webkit-appearance: none;
`;

export const Select = styled.select`
	width: 90%;
	height: 38px;
	background: white;
	color: gray;
	padding-left: 5px;
	font-size: 14px;
	border: none;
	margin-left: 10px;

	option {
		color: black;
		background: white;
		display: flex;
		white-space: pre;
		min-height: 20px;
		padding: 0px 2px 1px;
	}
`;

export const Button = styled.button`
	background: #0e0e0ee8;
	color: #fff;
	font-size: 1em;
	margin: 3px;
	padding: 0.5em 1em;
	border: 1px solid #a9b8c9;
	border-radius: 5px;
`;

export const BgSearch = styled.div`
	background-image: url(${Img});
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	height: 70vh;
	margin-bottom: 25px;
	.search {
		@media (max-width: 768px) {
			width: 90%;
		}
	}
`;
