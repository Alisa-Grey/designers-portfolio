import React from 'react';
import './style.sass';

interface IProps {
	currentIndex: number;
	setCurrentIndex: (arg0: number) => void;
	clickedImg: string;
	setClickedImg: (arg0: string) => void;
	data: { name: string; alt: string }[];
	onClose: () => void;
}

const Modal: React.FC<IProps> = ({
	currentIndex,
	setCurrentIndex,
	clickedImg,
	setClickedImg,
	data,
	onClose,
}) => {
	const handlePrevSlide = (): void => {
		const totalLength = data.length;
		if (currentIndex === 0) {
			setCurrentIndex(totalLength - 1);
			const newUrl = data[totalLength - 1].name;
			setClickedImg(newUrl);
			return;
		}
		const newIndex = currentIndex - 1;
		const newUrl = data.filter((item) => {
			return data.indexOf(item) === newIndex;
		});
		const newItem = newUrl[0].name;
		setClickedImg(newItem);
		setCurrentIndex(newIndex);
	};

	const handleNextSlide = (): void => {
		const totalLength = data.length;
		if (currentIndex + 1 >= totalLength) {
			setCurrentIndex(0);
			const newUrl = data[0].name;
			setClickedImg(newUrl);
			return;
		}
		const newIndex = currentIndex + 1;
		const newUrl = data.filter((item) => {
			return data.indexOf(item) === newIndex;
		});
		const newItem = newUrl[0].name;
		setClickedImg(newItem);
		setCurrentIndex(newIndex);
	};

	return (
		<div className='overlay'>
			<div className='modal'>
				<img
					src={require(`../../../assets/images/${clickedImg}`)}
					alt=''
					className='modal__img'
				/>
			</div>
			<button className='modal__close-btn btn-reset' onClick={onClose}></button>
			<button
				className='modal__btn prev-btn btn-reset'
				onClick={handlePrevSlide}
			>
				<svg
					data-name='Livello 1'
					id='Livello_1'
					viewBox='0 0 128 128'
					xmlns='http://www.w3.org/2000/svg'
					fill='#fff'
				>
					<title />
					<path d='M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z' />
					<path d='M74.12,35.88a3,3,0,0,0-4.24,0l-26,26a3,3,0,0,0,0,4.24l26,26a3,3,0,0,0,4.24-4.24L50.24,64,74.12,40.12A3,3,0,0,0,74.12,35.88Z' />
				</svg>
			</button>
			<button
				className='modal__btn next-btn btn-reset'
				onClick={handleNextSlide}
			>
				<svg
					data-name='Livello 1'
					id='Livello_1'
					viewBox='0 0 128 128'
					xmlns='http://www.w3.org/2000/svg'
					fill='#fff'
				>
					<title />
					<path d='M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z' />
					<path d='M58.12,35.88a3,3,0,0,0-4.24,4.24L77.76,64,53.88,87.88a3,3,0,1,0,4.24,4.24l26-26a3,3,0,0,0,0-4.24Z' />
				</svg>
			</button>
		</div>
	);
};

export default Modal;
