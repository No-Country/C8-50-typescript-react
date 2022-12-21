import styled from 'styled-components';

export const InputcreateComent = styled.input`
	font-size: 15px;
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
	background: whitesmoke;
	::placeholder {
		color: brown;
	}
`;
export const ButtonComent = styled.button`
background: white;
cursor: pointer;
border-radius: 7px;
border-color: #2196F3;
color: dodgerblue;
font-size: 15px;
padding: 10px;
margin: 10px;
&:hover,
&:focus {
  background: #2196F3;
  color: white;
}
`;
