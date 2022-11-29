import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
	LogoImg,
	BgDiv,
} from '../../styled-components/styled.navbarElements';
import Logo from '../../assets/img/logo.png';
import BurgerBtn from './BurgerBtn';
import { useState } from 'react';

const Navbar = (): any => {
	const [clicked, setClicked] = useState<boolean>(false);

	const handleClick = (): any => {
		setClicked(!clicked);
	};

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
					<div className={`links ${clicked ? 'active' : ''}`}>
						<NavLink onClick={handleClick} to='/'>
							Home
						</NavLink>
						<NavLink onClick={handleClick} to='/vender'>
							Vender
						</NavLink>
						<NavLink onClick={handleClick} to='/comprar'>
							Comprar
						</NavLink>
						<NavLink onClick={handleClick} to='/contact'>
							Contactos
						</NavLink>
						<NavLink onClick={handleClick} to='/sign-up'>
							Sign Up
						</NavLink>
					</div>
				</NavMenu>
				<div className='burguer'>
					<BurgerBtn clicked={clicked} handleClick={handleClick} />
				</div>
				<BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
			</Nav>
		</>
	);
};

export default Navbar;
