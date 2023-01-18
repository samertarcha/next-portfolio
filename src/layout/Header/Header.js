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
				<div className='header__occupation' data-aos='fade-left'>
					Web Developer
				</div>
				<div className='header__name' data-aos='fade-right'>
					Samer Tarcha
				</div>
				<div className='header__location' data-aos='fade-left'>
					Beirut, Lebanon
				</div>
			</div>
		</header>
	);
};

export default Header;
