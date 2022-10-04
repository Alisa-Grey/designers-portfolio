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
	const [formData, setFormData] = React.useState<IFormData>(initialFormData);
	const [errors, setErrors] = React.useState<IErrors>(initialErrors);

	const validateFields = (): boolean => {
		const nameErr = validateField(formData.name);
		const emailErr = validateEmail(formData.email);
		const messageErr = validateField(formData.message);
		console.log('first', nameErr, messageErr, emailErr);
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
			console.log('formData', formData);
		}
	};

	return (
		<section className='section brief' id='brief'>
			<div className='container'>
				<h2 className='section__heading'>Brief</h2>
				<p className='brief__text'>
					Get in touch and discover how we can help you
				</p>
				<form className='brief-form' onSubmit={handleSubmit} noValidate>
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
			</div>
		</section>
	);
};

export default Brief;
