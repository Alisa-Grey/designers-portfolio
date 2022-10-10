import React from 'react';
import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/alert';
import { IAlert } from '../../../store/types';
import './style.sass';

const CustomAlert: React.FC<IAlert> = ({ text, status, onClick }) => {
	return (
		<Alert className={`alert ${status}`} variant='top-accent' status={status}>
			<button
				className='alert__btn btn-reset'
				aria-label='Close alert'
				onClick={onClick}
			></button>
			<AlertIcon className='alert__icon' />
			<AlertDescription className='alert__text'>{text}</AlertDescription>
		</Alert>
	);
};

export default CustomAlert;
