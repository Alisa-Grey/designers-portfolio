import validator from 'validator';

export const validateEmail = (val: string): string => {
	if (val.trim() === '') return 'Email can not be empty';
	if (!validator.isEmail(val)) {
		return 'Email is not valid';
	}
	return '';
};

export const validateField = (val: string): string => {
	if (val.trim() === '') return 'Field can not be empty';
	if (val.length < 2) return 'Value should be at least 2 chars long';
	return '';
};
