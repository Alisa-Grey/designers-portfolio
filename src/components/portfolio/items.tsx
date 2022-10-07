import React, { useState } from 'react';
import './style.sass';

const items = [
	{ name: 'items_alice.jpg', alt: 'Items from WonderMatch' },
	{ name: 'items2_slots.jpg', alt: 'Items from New Slot' },
	{ name: 'items1_royal.jpg', alt: 'Items from Royal slots' },
	{ name: 'items2_royal.jpg', alt: 'Items from Royal slots' },
	{ name: 'items_slots.jpg', alt: 'Items from New Slots' },
	{ name: 'items3_slots.jpg', alt: 'Items from New Slots' },
	{ name: 'items5_slots.jpg', alt: 'Items from New Slots' },
	{ name: 'items4_slots.jpg', alt: 'Items from New Slots' },
	{ name: 'items7_slots.jpg', alt: 'Items from New Slots' },
	{ name: 'items6_slots.jpg', alt: 'Items from New Slots' },
	{ name: 'char2_royal.jpg', alt: 'Royal slots characters' },
	{ name: 'items1_summer.jpg', alt: 'Items from Summer Friends' },
	{ name: 'items2_summer.jpg', alt: 'Items from Summer Friends' },
	{ name: 'items3_summer.jpg', alt: 'Items from Summer Friends' },
];

const Items: React.FC = () => {
	const [limit, setLimit] = useState(4);
	const max = items.length - 1;
	const handleShowMoreImages = (): void => {
		if (limit <= max) {
			setLimit(limit + limit);
		}
	};
	return (
		<div className='category-wrap items' id='items'>
			<h3 className='section__subheading'>Items</h3>
			<div className='img-wrap items__img-wrap'>
				{items.slice(0, limit).map((item, index) => (
					<img
						key={item.name}
						src={require(`../../assets/images/${item.name}`)}
						alt=''
						className={`img items__img i${index + 1}`}
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

export default Items;
