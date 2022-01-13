import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
	Nav,
	NavbarConteiner,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavItemBtn,
	NavBtnLink,
} from "./Navbar.elements";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavbarConteiner>
						<NavLogo to='/' onClick={closeMobileMenu}>
							<NavIcon />
							ULTRA
						</NavLogo>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks to='/'>Home</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to='/services'>Serviços</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to='/products'>Produtos</NavLinks>
							</NavItem>

							<NavItemBtn>
								{button ? (
									<NavBtnLink to='/sing-up'>
										<Button primary>SIGN UP</Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to='/sign-up'>
										<Button fontBig primary>
											SIGN UP
										</Button>
									</NavBtnLink>
								)}
							</NavItemBtn>
						</NavMenu>
					</NavbarConteiner>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
