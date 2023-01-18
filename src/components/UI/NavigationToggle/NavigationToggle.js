import './NavigationToggle.scss';

const NavigationToggle = ({ onClick, status }) => {
	return (
		<div
			className={`navigationToggle ${status}`}
			onClick={onClick}
			data-aos='fade-down'
			data-aos-mirror='false'>
			<div className='navigationToggle__hamburger'></div>
		</div>
	);
};

export default NavigationToggle;
