import React from 'react';
import CustomInput from '../common/customInput';
import { validateEmail, validateField } from '../../utils/validation';
import './style.sass';

interface IFormData {
	name: string;
	email: string;
	message: string;
}
interface IErrors {
	name: string;
	email: string;
	message: string;
}

const initialFormData: IFormData = { name: '', email: '', message: '' };
const initialErrors: IErrors = { name: '', email: '', message: '' };

const Brief: React.FC = () => {
	const formRef = React.useRef<HTMLFormElement>(null);
	const [formData, setFormData] = React.useState<IFormData>(initialFormData);
	const [errors, setErrors] = React.useState<IErrors>(initialErrors);

	const validateFields = (): boolean => {
		const nameErr = validateField(formData.name);
		const emailErr = validateEmail(formData.email);
		const messageErr = validateField(formData.message);
		if (nameErr || emailErr || messageErr) {
			setErrors({
				name: nameErr,
				email: emailErr,
				message: messageErr,
			});
		}
		return [nameErr, emailErr, messageErr].every((el) => !el);
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: '' });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (validateFields()) {
			fetch('https://formsubmit.co/ajax/corie.horatio@aladeen.org', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					message: formData.message,
				}),
			})
				.then((response) => response.json())
				.then((data) => alert('thank you for emailing us'))
				.catch((error) => alert(error));
		}
	};

	return (
		<section className='section brief' id='brief'>
			<div className='container'>
				<h2 className='section__heading'>Brief</h2>
				<p className='brief__text'>
					Get in touch and discover how we can help you
				</p>
				<form
					ref={formRef}
					className='brief-form'
					onSubmit={handleSubmit}
					noValidate
					action='https://formsubmit.co/el/jacici'
					method='POST'
					target='_blank'
				>
					<input type='hidden' name='_captcha' value='false'></input>
					<CustomInput
						type='text'
						id='name'
						name='name'
						placeholder=' '
						className='brief-form__input'
						labelText='Enter your name'
						labelClass='brief-form__label'
						value={formData.name}
						error={errors.name}
						onChange={handleInputChange}
					/>
					<CustomInput
						type='email'
						id='email'
						name='email'
						placeholder=' '
						className='brief-form__input'
						labelText='Enter a valid email address'
						labelClass='brief-form__label'
						value={formData.email}
						error={errors.email}
						onChange={handleInputChange}
					/>
					<textarea
						name='message'
						id='message'
						placeholder=' '
						value={formData.message}
						onChange={handleInputChange}
						className='brief-form__input brief-form__textarea'
					></textarea>
					<label htmlFor='message' className='brief-form__label'>
						Enter your message
					</label>
					<p className='error-text'>{errors.message}</p>
					<button type='submit' className='brief-form__btn btn-reset'>
						Submit
					</button>
				</form>
				<div className='brief__img'></div>
			</div>
		</section>
	);
};

export default Brief;
