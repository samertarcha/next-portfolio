import { useState } from 'react';

import Loading from '../../components/UI/Loading/Loading';

import './Contact.scss';

import emailjs from 'emailjs-com';

// import ReCAPTCHA from 'react-google-recaptcha';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const nameInputHandler = event => {
		setName(event.target.value);
	};

	const emailInputHandler = event => {
		setEmail(event.target.value);
	};

	const messageInputHandler = event => {
		setMessage(event.target.value);
	};

	const sendEmail = event => {
		event.preventDefault();
		setIsLoading(true);

		emailjs
			.sendForm(
				'service_gvs5w3d',
				'template_5hdnfoi',
				event.target,
				'xNTo4yvmFiRAuWG3i'
			)
			.then(res => {
				setIsLoading(false);
				MySwal.fire({
					title: 'Message Sent Successfully',
					icon: 'success',
					text: res.message,
				});
			})
			.catch(err => {
				setIsLoading(false);
				MySwal.fire({
					title: 'Error',
					icon: 'error',
					text: err.message,
				});
			});

		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<section className='contact' id='contact'>
			{isLoading && <Loading />}
			<h2
				className='heading-secondary'
				data-aos='fade-down'
				data-aos-offset='-10'
				data-aos-delay='100'>
				Contact
			</h2>
			<div className='contact__card' data-aos='fade-up'>
				<form className='contact__form' onSubmit={sendEmail}>
					<div className='contact__form-item'>
						<input
							type='text'
							className='contact__input'
							id='contact-name'
							name='name'
							placeholder='Name'
							onChange={nameInputHandler}
							value={name}
							required
						/>
						<label htmlFor='name' className='contact__label'>
							Name
						</label>
					</div>
					<div className='contact__form-item'>
						<input
							type='email'
							className='contact__input'
							id='contact-email'
							name='email'
							placeholder='Email'
							onChange={emailInputHandler}
							value={email}
							required
						/>
						<label htmlFor='email' className='contact__label'>
							Email
						</label>
					</div>
					<div className='contact__form-item'>
						<textarea
							id='contact-message'
							className='contact__input'
							name='message'
							placeholder='Your message'
							onChange={messageInputHandler}
							value={message}
							rows='5'
							required
						/>
						<label
							htmlFor='message'
							className='contact__message-label'>
							Message
						</label>
					</div>
					{/* <ReCAPTCHA sitekey='6Ld--xEhAAAAAK8FB1E7NpYnfNAV3Pu0IZfrY4Dd' /> */}
					<div className='contact__form-item'>
						<input
							type='submit'
							className='btn'
							value='Send message'
						/>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
