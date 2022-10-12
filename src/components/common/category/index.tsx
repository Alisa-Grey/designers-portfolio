import React, { useState } from 'react';
import Modal from '../modal';

interface IProps {
	categoryName: string;
	categoryHeading?: string;
	data: { name: string; alt: string }[];
	itemsLimit: number;
	hasModal?: boolean;
	assetsSource: string;
}

const Category: React.FC<IProps> = ({
	data,
	categoryName,
	categoryHeading,
	itemsLimit,
	assetsSource,
	hasModal,
}) => {
	// handle modal carousel
	const [isOpened, setIsOpened] = useState(false);
	const [clickedImg, setClickedImg] = useState('');
	const [currentIndex, setCurrentIndex] = useState(-1);

	const handleClick = (item: { name: string }, index: number): void => {
		setIsOpened(true);
		setCurrentIndex(index);
		setClickedImg(item.name);
	};

	const handleClose = (): void => {
		setIsOpened(false);
	};
	// set limit to shown images
	const [limit, setLimit] = useState(itemsLimit);
	const max = data.length - 1;
	const handleShowMoreImages = (): void => {
		if (limit <= max) {
			setLimit(limit + limit);
		}
	};
	return (
		<div className={`category-wrap ${categoryName}`} id={categoryName}>
			<h3 className='section__subheading'>
				{categoryHeading ? categoryHeading : categoryName}
			</h3>
			<div className={`img-wrap ${categoryName}__img-wrap`}>
				{data.slice(0, limit).map((item, index) => (
					<img
						key={item.name}
						src={require(`../../../assets/${assetsSource}/${item.name}`)}
						alt=''
						className={`img ${categoryName}__img`}
						onClick={(): void => handleClick(item, index)}
					/>
				))}
			</div>
			{limit <= max && (
				<button
					disabled={limit >= max}
					onClick={handleShowMoreImages}
					className='more-btn'
				>
					Show More
				</button>
			)}
			{hasModal && isOpened && (
				<Modal
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
					clickedImg={clickedImg}
					setClickedImg={setClickedImg}
					data={data}
					onClose={handleClose}
				/>
			)}
		</div>
	);
};

export default Category;
