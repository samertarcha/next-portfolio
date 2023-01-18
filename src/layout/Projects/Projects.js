import './Projects.scss';
import Button from '../../components/UI/Button/Button';
import { ProjectsList } from './ProjectsList';

const Projects = () => {
	return (
		<section className='projects' id='projects'>
			<h2
				className='heading-secondary'
				data-aos='fade-down'
				data-aos-offset='-10000'
				data-aos-delay='100'>
				My projects
			</h2>
			<div className='projects__list'>
				{ProjectsList.map((project, index) => (
					<div
						key={index}
						className='projects__item'
						data-aos='zoom-in'
						data-aos-delay='100'>
						<div className='projects__container'>
							<div
								className={`projects__img projects__img--${project.name}`}></div>
							<div className='projects__content'>
								<h3 className='heading-tertiary'>
									{project.heading}
								</h3>
								<ul className='projects__description'>
									{project.description.map((item, index) => (
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
						<Button href={project.url}>Visit Project</Button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
