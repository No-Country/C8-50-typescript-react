import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
	LogoImg,
} from '../../styled-components/styled.navbarElements';
import Logo from '../../assets/img/logo.png';

const Navbar = (): any => {
	return (
		<>
			<Nav>
				<Bars />
				<NavBtn>
					<NavBtnLink to='/'>
						<LogoImg className='logo' src={Logo} alt='logo-inmobiliaria' />
					</NavBtnLink>
				</NavBtn>
				<NavMenu>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/vender'>Vender</NavLink>
					<NavLink to='/comprar'>Comprar</NavLink>
					<NavLink to='/contact'>contactarnos</NavLink>
					<NavLink to='/sign-up'>Sign Up</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
