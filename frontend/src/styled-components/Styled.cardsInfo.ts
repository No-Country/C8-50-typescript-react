import styled from 'styled-components';

export const ContainerCards = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 320px);
	row-gap: 3.5rem;
	justify-content: center;
	margin-top: 5rem;
	@media screen and (min-width: 711px) {
		grid-template-columns: repeat(2, 320px);
		gap: 2.5rem;
	}
	@media screen and (min-width: 1073px) {
		grid-template-columns: repeat(3, 320px);
	}
`;
export const PropiedadesCard = styled.div`
	/* width: 294px; */
	height: 380px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 1rem;
	border-radius: 10px;
	box-shadow: 0px 4px 4px 0px #00000040;
	background: #E6E9F780;
	text-align: center;


	&:hover {
		transition: all 0.5s ease;
		transform: scale(1.1);
	}
`;
export const CardImg = styled.img`
	width: 140px;
`;
export const CardTitle = styled.h1`
	font-size: 1.3rem;
	margin: 0;
`;
export const CardText = styled.p`
	margin: 0;
	font-size: 0.87rem;
	color: #00000080;
`;
export const CardButton = styled.button`
	width: 160px;
	color: white;
	background-color: #3d4cd7;
	padding: 0.8rem;
	font-weight: bold;
	font-size: 0.9rem;
	border: none;
	border-radius: 7px;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
`;
