import './Nav.scss';

import { NavList } from './NavList';

const Nav = ({ status, onClick }) => {
	return (
		<nav className={`nav ${status}`}>
			<ul className='nav__list'>
				{NavList.map((item, index) => (
					<li key={index} onClick={onClick}>
						<a href={item.id} className='nav__item'>
							<svg className='nav__icon'>
								<use xlinkHref={item.icon} />
							</svg>
							<p className='nav__title'>{item.title}</p>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
