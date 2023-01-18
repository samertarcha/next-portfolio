import { SkillsList } from './SkillsList';
import './Skills.scss';

const Skills = () => {
	return (
		<section className='skills' id='skills'>
			<h2
				className='heading-secondary'
				data-aos='fade-down'
				data-aos-offset='-1000'
				data-aos-delay='100'>
				My top skills
			</h2>
			<div className='skills__list'>
				{SkillsList.map((skill, index) => (
					<div
						key={index}
						className='skills__card'
						data-aos='fade-left'>
						<div className='skills__card--side skills__card--front'>
							<div
								className={`skills__card--img skills__card--img--${skill.name}`}
							/>
						</div>
						<div
							className={`skills__card--side skills__card--back skills__card--back--${skill.name}`}>
							<ul>
								{skill.description.map((item, index) => (
									<li key={index}>
										<svg>
											<use xlinkHref='img/sprite.svg#icon-chevron-thin-right' />
										</svg>
										<p>{item}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
