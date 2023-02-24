import './Footer.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__content'>
				<ul className='footer__social'>
					<li>
						<a
							href='mailto:samertarcha@outlook.com'
							target='_blank'
							rel='noreferrer'>
							<svg>
								<use xlinkHref='img/sprite.svg#icon-mail'></use>
							</svg>
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/in/samer-tarcha'
							target='_blank'
							rel='noreferrer'>
							<svg>
								<use xlinkHref='img/sprite.svg#icon-linkedin'></use>
							</svg>
						</a>
					</li>
					<li>
						<a
							href='https://github.com/samertarcha'
							target='_blank'
							rel='noreferrer'>
							<svg>
								<use xlinkHref='img/sprite.svg#icon-github'></use>
							</svg>
						</a>
					</li>
				</ul>
				<div className='footer__copyright'>
					<p>&copy; 2022 Samer Tarcha</p>
					<p>&copy; All rights reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
