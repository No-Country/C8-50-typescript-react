import styled from 'styled-components';

export const ProductList = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 5rem;
`;

export const ProductCard = styled.div`
    position: relative;
    background-color: #e8e8ef;
    margin: 1rem;
    flex; 1 0 25rem;
    max-width: 30rem;
    max-height: 50rem;
    transition: 0.2s;
    &:hover{
        transform: translateY(-0.5rem);
        box-shadow: 0.5rem 0.75rem 1.5rem #bbbbbb;
    }
    .productCard{
        max-width: 100%;
        height: auto;
    }
    .shopping{
        position: absolute;
        right: 0;
        margin: 1rem;
        font-size: 2rem;
        transition: 0.2s;
        cursor: pointer;
    }
    .bookmark{
        position: absolute;
        right: 3rem;
        margin: 1rem;
        font-size: 2rem;
        transition: 0.2s;
        cursor: pointer;
    }
`;

export const Content = styled.div`
	margin: 2rem;
	h3 {
		font-size: 1rem;
	}
	.stack-one,
	.stack-two {
		margin: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.price {
		font-size: 1.5rem;
		font-weight: bold;
	}
	.time {
		font-size: 1.1rem;
	}
`;
