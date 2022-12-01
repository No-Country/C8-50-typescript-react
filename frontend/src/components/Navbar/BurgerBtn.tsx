import { Burger } from '../../styled-components/styled.navbarElements';
interface Props {
	clicked?: boolean;
	handleClick: any;
}
function BurgerBtn(props: Props): JSX.Element {
	return (
		<Burger onClick={props.handleClick}>
			<div className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</Burger>
	);
}

export default BurgerBtn;
