import { useEffect } from 'react';

import './Header.scss';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
	useEffect(() => {
		Aos.init({
			mirror: true,
		});
	});
	return (
		<header className='header' id='home'>
			<div className='header__content'>
				<h1 className='header__occupation' data-aos='fade-left'>
					Web Developer
				</h1>
				<h1 className='header__name' data-aos='fade-right'>
					Samer Tarcha
				</h1>
				<div className='header__location' data-aos='fade-left'>
					Beirut, Lebanon
				</div>
			</div>
		</header>
	);
};

export default Header;
