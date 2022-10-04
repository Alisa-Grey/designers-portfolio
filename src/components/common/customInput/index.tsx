import React from 'react';
import './style.sass';

interface IInputProps {
	type?: string;
	id: string;
	name: string;
	value: string;
	placeholder?: string;
	className?: string;
	labelClass?: string;
	error?: string;
	autoComplete?: string;
	labelText?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput: React.FC<IInputProps> = ({
	type,
	id,
	name,
	value,
	placeholder,
	className,
	labelClass,
	error,
	autoComplete,
	labelText,
	onChange,
}) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				marginBottom: '3rem',
			}}
		>
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				autoComplete='off'
				className={className}
				onChange={onChange}
			/>
			<label htmlFor={id} className={labelClass}>
				{labelText}
			</label>
			<p className='error-text'>{error}</p>
		</div>
	);
};

export default CustomInput;
