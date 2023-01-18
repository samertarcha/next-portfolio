import './About.scss';

// import { Parallax } from 'react-scroll-parallax';

import { AboutList } from './AboutList';

const About = () => {
	return (
		<section className='about' id='about'>
			<h2
				className='heading-secondary'
				data-aos='fade-down'
				data-aos-mirror='true'>
				About me
			</h2>
			<div className='about__container' data-aos='fade-left'>
				{AboutList.map((item, index) => (
					// <Parallax key={index} speed={++index}>
					<div key={index} className='about__card'>
						<div className='about__icon'>
							<svg className='about__icon-svg'>
								<use xlinkHref={item.icon} />
							</svg>
						</div>
						<div className='about__text'>
							<p>{item.text}</p>
						</div>
					</div>
					// </Parallax>
				))}
			</div>
		</section>
	);
};

export default About;
