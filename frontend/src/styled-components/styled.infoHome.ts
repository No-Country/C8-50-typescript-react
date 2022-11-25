import styled from 'styled-components';

export const ContainerHomeInfo = styled.div`
	@media screen and (min-width: 955px) {
		background-color: #e6e9f7;
	}
`;

export const ContainerCard = styled.div`
	max-width: 1450px;
	height: 409px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	position: relative;

	@media screen and (min-width: 955px) {
		justify-content: center;
		background-color: #e6e9f7;
	}
`;
export const CardInfoHome = styled.div`
	max-width: 590px;
	width: 80%;
	height: 250px;
	background-color: white;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	text-align: center;
	box-shadow: 0px 4px 4px 0px #00000040;
	box-shadow: 0px 4px 4px 0px #00000040;
	z-index: 1;

	@media screen and (min-width: 955px) {
		align-items: start;
		text-align: start;
		padding-left: 2rem;
	}
`;
export const Logo = styled.img`
	width: 135px;
`;
export const Text = styled.p`
	color: #000000ba;
	margin: 0;
`;
export const Button = styled.button`
	padding: 0.8rem;
	width: 206px;
	border-radius: 7px;
	border: none;
	background: #3d4cd7;
	color: white;
	font-size: 1rem;
	font-weight: bold;
`;
export const ImgBackground = styled.img`
	width: 95%;
	max-width: 750px;
	position: absolute;
	z-index: 0;
	top: 5px;
	border-radius: 7px;

	@media screen and (min-width: 955px) {
		max-width: 805px;
		top: 34px;
		right: 50px;
		border-radius: 0;
	}
`;
