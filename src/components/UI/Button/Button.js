import './Button.scss';

const Button = ({ children, href }) => {
	return (
		<a href={href} className='btn' target='_blank' rel='noreferrer'>
			{children}
		</a>
	);
};

export default Button;
