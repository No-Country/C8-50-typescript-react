import styled from 'styled-components';

export const Gallery = styled.div`
	background-color: #ede5e5a6;
	width: 100%;
	margin-top: 1rem;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 1rem;
	padding: 25px;
	@media (max-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 0.3rem;
		padding: 5px;
	}
`;
export const ImageGallery = styled.img`
	grid-column: 1 / span 2;
	grid-row: 1;
	object-fit: cover;
	border-radius: 5px;
	&:nth-child(1) {
		margin-bottom: 20px;
		width: 75%;
		height: 250px;
		grid-row: 1 / 2;
	}
	&:nth-child(2) {
		height: 300px;
		width: 100%;
		align-self: center;
		grid-row: 1/3;
		grid-column: 2/4;
		z-index: 1;
	}
	&:nth-child(3) {
		width: 75%;
		height: 250px;
		grid-row: 2 / 2;
		z-index: 2;
		border: 3px solid #fff;
		border-radius: 5px;
	}
`;

export const CardInfo = styled.div`
	width: 100%;
	border-radius: 5px;
	padding: 25px;
	margin: 25px;
	background-color: #f8faff;
	height: 200px;
	align-self: center;
	grid-row: 1 / 3;
	grid-column: 3 / 5;
	z-index: 2;
	box-shadow: -2px 7px 7px 1px rgba(66, 64, 64, 0.77);
	@media (max-width: 768px) {
		grid-column: 1 / 3;
	}
`;

export const Title = styled.h3`
	align-items: center;
	color: black;
	font-size: 1.2rem;
	text-decoration: capitalize;
`;

export const P = styled.p`
	color: #4b4b4bf5;
	font-size: 0.8rem;
	justify-content: center;
`;

export const Btn = styled.button`
	padding: 0.8rem;
	width: 206px;
	border-radius: 7px;
	border: none;
	background: #3d4cd7;
	color: white;
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
`;
