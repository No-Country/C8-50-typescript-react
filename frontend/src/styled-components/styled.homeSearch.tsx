import styled from 'styled-components';

export const Form = styled.form`
	width: 100%;
	display: flex;
	justify-content: center;

	flex-direction: column;
	background-color: #1c1ac51f;
	border: none;
	height: 80vh;
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
