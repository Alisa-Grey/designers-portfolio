import React, { useState } from 'react';
import Modal from '../modal';

interface IProps {
	categoryName: string;
	categoryHeading?: string;
	data: { name: string; alt: string }[];
	dataAlternative?: { name: string; alt: string }[];
	itemsLimit: number;
	hasModal?: boolean;
	assetsSource: string;
	mediaQuery?: string;
}

const Category: React.FC<IProps> = ({
	data,
	dataAlternative,
	categoryName,
	categoryHeading,
	itemsLimit,
	assetsSource,
	hasModal,
	mediaQuery,
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

	// const handleAnimationClick = (e: any, item: any): void => {
	// 	const name = item.name.split('.')[0] + '.png';
	// 	e.target.src = require(`../../../assets/${assetsSource}/${name}`);
	// };

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

	// change images list for smaller screens
	const [matches, setMatches] = useState(
		window.matchMedia(`${mediaQuery}`).matches
	);
	React.useEffect(() => {
		window
			.matchMedia(`${mediaQuery}`)
			.addEventListener('change', (e) => setMatches(e.matches));
	}, [mediaQuery]);
	return (
		<div className={`category-wrap ${categoryName}`} id={categoryName}>
			<h3 className='section__subheading'>
				{categoryHeading ? categoryHeading : categoryName}
			</h3>
			<div className={`img-wrap ${categoryName}__img-wrap`}>
				{!matches &&
					data
						.slice(0, limit)
						.map((item, index) => (
							<img
								key={item.name}
								src={require(`../../../assets/${assetsSource}/${item.name}`)}
								alt=''
								className={`img ${categoryName}__img`}
								onClick={(): void => handleClick(item, index)}
							/>
						))}
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
				{/* smaller screens */}
				{mediaQuery &&
					matches &&
					dataAlternative
						?.slice(0, limit)
						.map((item) => (
							<img
								key={item.name}
								src={require(`../../../assets/${assetsSource}/${item.name}`)}
								alt={item.alt}
								className={`img ${categoryName}__img`}
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
		</div>
	);
};

export default Category;
