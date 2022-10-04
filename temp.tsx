// import React, { FC, useState } from 'react';
// import ReactDOM from 'react-dom';

// import Input from '../Input';
// import Textarea from '../TextArea';
// import Button from '../Buttons';

// import './ModalForm.scss';
// import { validateEmail, validateField } from '../../config/common';
// import { useTranslation } from 'react-i18next';
// import { sendEmailMassage } from '../../utils';

// interface IProps {
// 	visible?: boolean;
// 	onOpenModal: (open: boolean) => void;
// 	onOpenSuccessfulForm: (open: boolean) => void;
// }

// const ModalForm: FC<IProps> = ({
// 	onOpenSuccessfulForm,
// 	onOpenModal,
// 	visible = false,
// }) => {
// 	const { t } = useTranslation();
// 	const [value, setValue] = useState({ name: '', email: '', text: '' });
// 	const [error, setError] = useState<{ [props: string]: boolean }>({
// 		name: false,
// 		email: false,
// 	});
// 	const onCloseForm = () => {
// 		setError({
// 			...error,
// 			name: false,
// 			email: false,
// 		});
// 		onOpenModal(false);
// 	};

// 	const handleFormSubmit = async () => {
// 		if (checkValid()) {
// 			onOpenModal(false);
// 			onOpenSuccessfulForm(await sendEmailMassage(value));
// 		}
// 	};

// 	const checkValid = () => {
// 		const isValidName = validateField(value.name);
// 		const isValidEmail = validateField(value.email, validateEmail);

// 		setError({ ...error, name: !isValidName, email: !isValidEmail });

// 		return [isValidName, isValidEmail].every(Boolean);
// 	};

// 	const onChange = (
// 		e:
// 			| React.ChangeEvent<HTMLInputElement>
// 			| React.ChangeEvent<HTMLTextAreaElement>
// 	) => {
// 		const { name, value: eventValue } = e.target;
// 		setError({ ...error, [name]: false });
// 		setValue({ ...value, [name]: eventValue });
// 	};

// 	if (!visible) return null;
// 	return ReactDOM.createPortal(
// 		<Backdrop onClick={onCloseForm}>
// 			<div
// 				className='modal-form__container'
// 				onClick={(e) => e.stopPropagation()}
// 			>
// 				<Input
// 					error={error.name}
// 					name='name'
// 					onChange={onChange}
// 					placeholder={t('input.name')}
// 					value={value.name}
// 				/>
// 				<Input
// 					error={error.email}
// 					name='email'
// 					onChange={onChange}
// 					placeholder='Email'
// 					value={value.email}
// 				/>

// 				<Textarea
// 					name='text'
// 					onChange={onChange}
// 					placeholder={t('input.message')}
// 				/>
// 				<div className='modal-form__button-wrapper'>
// 					<Button.AccenticButton onClick={handleFormSubmit} theme='dark'>
// 						{t('send')}
// 					</Button.AccenticButton>
// 				</div>
// 			</div>
// 		</Backdrop>,
// 		document.body
// 	);
// };

// interface IBackdropProps {
// 	onClick: (e: any) => void;
// 	children: React.ReactNode;
// }

// export const Backdrop: FC<IBackdropProps> = ({ onClick, children }) => {
// 	const handleClick = (e: any) => {
// 		e.stopPropagation();
// 		onClick(e);
// 	};
// 	return (
// 		<div className='modal-form' onClick={handleClick}>
// 			{children}
// 		</div>
// 	);
// };

// export default ModalForm;

// import React, { FC } from 'react';
// import ReactDOM from 'react-dom';
// import { useTranslation } from 'react-i18next';
// import { ReactComponent as Icon } from '../../../images/successful_sent.svg';

// import Button from '../../Buttons';
// import { Backdrop } from '../ModalForm';

// import './SuccessfullySentForm.scss';

// interface IProps {
// 	visible: boolean;
// 	onOpenModal: (open: boolean) => void;
// }

// const SuccessfullySentForm: FC<IProps> = ({ onOpenModal, visible }) => {
// 	const { t } = useTranslation();
// 	const onCloseForm = () => onOpenModal(false);
// 	if (!visible) return null;
// 	return ReactDOM.createPortal(
// 		<Backdrop onClick={onCloseForm}>
// 			<div
// 				className='successfully-sent-form__container'
// 				onClick={(e) => e.stopPropagation()}
// 			>
// 				<Icon />
// 				<span className='successfully-sent-form__title'>
// 					{t('send.successfully')}
// 				</span>
// 				<span className='successfully-sent-form__subtitle'>
// 					{t('send.back')}
// 				</span>
// 				<Button.AccenticButton onClick={onCloseForm} theme='dark'>
// 					OK
// 				</Button.AccenticButton>
// 			</div>
// 		</Backdrop>,
// 		document.body
// 	);
// };

// export default SuccessfullySentForm;

// import React, { ChangeEvent, useState } from 'react';
// import Input from '../../components/Input';
// import TextArea from '../../components/TextArea';
// import Button from '../Buttons';
// // import FileUploader from '../FileUploader';
// import Checkbox from '../Checkbox';
// import Select from '../Select';
// import LinkString from '../Link';
// import Option from '../Select/Option/Option';

// import { useMedia } from '../../hooks';
// import { validateEmail, validateField } from '../../config/common';

// import './project-start-form.scss';
// import { useTranslation } from 'react-i18next';
// import SuccessfullySentForm from '../ModalForm/SuccessfullySentForm.tsx';
// import { sendEmailMassage } from '../../utils';

// const options = [
// 	{ value: 'email', title: 'Email' },
// 	{ value: 'skype', title: 'Skype' },
// 	{ value: 'telegram', title: 'Telegram' },
// 	{ value: 'linkedin', title: 'Linkedin' },
// 	{ value: 'fb', title: 'Facebook' },
// ];

// const ProjectStartForm: React.FC = () => {
// 	const [checked, setChecked] = useState(false);
// 	const [onOpenSuccessfulModal, setOpenSuccessfulModal] = useState(false);
// 	// const [file, setFile] = useState<null | File>(null);
// 	const [error, setError] = useState<{ [props: string]: boolean }>({
// 		name: false,
// 		contactLink: false,
// 		contactType: false,
// 		checked: false,
// 	});
// 	const [fieldsValues, setFieldsValues] = useState({
// 		name: '',
// 		contactType: 'email',
// 		contactLink: '',
// 		text: '',
// 	});
// 	const { t } = useTranslation();
// 	const breakPoint = useMedia('(max-width: 1399px)');
// 	const breakPoint2 = useMedia('(max-width: 991px)');
// 	const unHoveredBreakpoint = useMedia('(min-width: 768px)');

// 	const [openSelect, setOpenSelect] = useState(false);

// 	// const onAddFile = (e: ChangeEvent<HTMLInputElement>) => {
// 	//   if (!e.target.files![0]) {
// 	//     return;
// 	//   }
// 	//   setFile(e.target.files![0]);
// 	// };

// 	// const onFileRemove = () => setFile(null);

// 	const onClose = () => setOpenSelect(false);

// 	const onOpenSelect = () => setOpenSelect(true);

// 	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) =>
// 		setChecked(!checked);

// 	const handleSelect = (value: string) => {
// 		setError({ ...error, contactType: false });
// 		setFieldsValues({
// 			...fieldsValues,
// 			contactType: value,
// 		});
// 	};

// 	const handleChange = (e: any) => {
// 		setError({ ...error, [e.target.name]: false });
// 		setFieldsValues({
// 			...fieldsValues,
// 			[e.target.name]: e.target.value.trim(),
// 		});
// 	};

// 	const contactTypeLinkValidation = {
// 		email: validateField(fieldsValues.contactLink, validateEmail),
// 		skype: validateField(fieldsValues.contactLink),
// 		telegram: validateField(fieldsValues.contactLink),
// 		linkedin: validateField(fieldsValues.contactLink),
// 		fb: validateField(fieldsValues.contactLink),
// 	};

// 	const checkValid = () => {
// 		const isValidName = validateField(fieldsValues.name);

// 		setError({
// 			...error,
// 			name: !isValidName,
// 			contactLink:
// 				!contactTypeLinkValidation[
// 					fieldsValues.contactType as keyof typeof contactTypeLinkValidation
// 				],

// 			checked: !checked,
// 		});

// 		return [
// 			isValidName,
// 			fieldsValues.contactLink,
// 			fieldsValues.contactType,
// 			checked,
// 		].every(Boolean);
// 	};

// 	const handleSubmit = async () => {
// 		if (checkValid()) {
// 			const data = {
// 				name: fieldsValues.name,
// 				contactType: fieldsValues.contactType,
// 				link: fieldsValues.contactLink,
// 				text: fieldsValues.text,
// 				// file: file,
// 			};

// 			setOpenSuccessfulModal(await sendEmailMassage(data));
// 		}
// 	};

// 	return (
// 		<div className='project-start__container'>
// 			<div className='project-start__form'>
// 				<div className='project-start__col'>
// 					<div>
// 						<Input
// 							placeholder={t('input.name')}
// 							width='100%'
// 							error={error.name}
// 							onChange={handleChange}
// 							name='name'
// 						/>
// 					</div>
// 					<div className='project-start__row'>
// 						<Select
// 							isOpen={openSelect}
// 							onOpen={onOpenSelect}
// 							onClose={onClose}
// 							onChange={handleSelect}
// 							defaultValue='Email'
// 							error={error.contactType}
// 							theme='gray'
// 						>
// 							{options.map((option) => (
// 								<Option key={option.value} value={option.value}>
// 									{option.title}
// 								</Option>
// 							))}
// 						</Select>
// 						<Input
// 							placeholder={t('input.contact')}
// 							width={!breakPoint2 ? '120%' : '100%'}
// 							error={error.contactLink}
// 							onChange={handleChange}
// 							name='contactLink'
// 						/>
// 					</div>
// 					{breakPoint && (
// 						<div className='project-start__col' style={{ height: 100 }}>
// 							<TextArea
// 								width='100%'
// 								placeholder={t('input.message')}
// 								rows={6}
// 								name='text'
// 							/>
// 						</div>
// 					)}
// 					{/* <FileUploader
//             onFileRemove={onFileRemove}
//             file={file}
//             onChange={onAddFile}
//           /> */}
// 					<div className='project-start__bottom'>
// 						<div className='project-start__policy'>
// 							<Checkbox
// 								onChange={handleCheckboxChange}
// 								error={error.checked}
// 								checked={checked}
// 							/>
// 							<span>
// 								{t('input.agree')}{' '}
// 								<LinkString href='http://leviossa-landing.s3-website.eu-central-1.amazonaws.com/Terms%20and%20Conditions.pdf'>
// 									{t('input.conditions')}
// 								</LinkString>{' '}
// 								{t('input.and')}{' '}
// 								<LinkString href='http://leviossa-landing.s3-website.eu-central-1.amazonaws.com/Privacy%20Policy.pdf'>
// 									{t('input.privacy')}
// 								</LinkString>
// 							</span>
// 						</div>
// 						<Button.AccenticButton
// 							theme={!unHoveredBreakpoint ? 'white' : 'dark'}
// 							onClick={handleSubmit}
// 							size='big'
// 						>
// 							Alohomora
// 						</Button.AccenticButton>
// 					</div>
// 				</div>
// 				{!breakPoint && (
// 					<div className='project-start__col' style={{ height: 238 }}>
// 						<TextArea
// 							width='100%'
// 							placeholder={t('input.message')}
// 							rows={6}
// 							onChange={handleChange}
// 							name='text'
// 						/>
// 					</div>
// 				)}
// 			</div>
// 			<SuccessfullySentForm
// 				onOpenModal={setOpenSuccessfulModal}
// 				visible={onOpenSuccessfulModal}
// 			/>
// 		</div>
// 	);
// };

// export default ProjectStartForm;

// // utils
// interface EmailContent {
//   name: string;
//   email?: string;
//   text: string;
//   file?: File;
//   contactType?: string;
//   link?: string;
// }

// export const arrCommon = <T>(arr1: T[], arr2: T[]) => {
//   return arr1.filter((el) => arr2.includes(el));
// };

// export const createArrOfTechnologies = <T extends { abbr: string }>(
//   arr: T[]
// ) => {
//   return arr.map((el) => el.abbr);
// };
// export const sendEmailMassage = async (data: EmailContent) => {
//   const response = await fetch(
//     ' https://levilabs-api.herokuapp.com/management/customers/create_from_landing',
//     {
//       method: 'Post',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name: data.name,
//         notes: ` ${data.text} ${data.contactType || 'Email'}:${
//           data.link || data.email
//         }`,
//       }),
//     }
//   );
//   if (response) return true;
//   return false;
// };
