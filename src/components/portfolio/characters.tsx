import React, { useState } from 'react';
import './style.sass';

const characters = [
	{
		name: 'alice_characters.jpg',
		alt: ' WonderMatch characters',
	},
	{ name: 'char6_slots.jpg', alt: 'New slots characters' },
	{ name: 'char2_slots.jpg', alt: 'New slots characters' },
	{
		name: 'slot_characters1.jpg',
		alt: 'New slots characters - animals',
	},
	{ name: 'char4_slots.jpg', alt: 'New slots characters' },
	{ name: 'char1_slots.jpg', alt: 'New slots characters' },
	{
		name: 'summer_characters.jpg',
		alt: 'Summer friends characters',
	},
	{ name: 'char3_slots.jpg', alt: 'New slots characters' },
	{ name: 'char5_slots.jpg', alt: 'New slots characters' },
];

const Characters: React.FC = () => {
	const [limit, setLimit] = useState(3);
	const max = characters.length - 1;
	const handleShowMoreImages = (): void => {
		if (limit <= max) {
			setLimit(limit + limit);
		}
	};
	return (
		<div className='category-wrap characters'>
			<h3 className='section__subheading'>Characters</h3>
			<div className='img-wrap characters__img-wrap'>
				{characters.slice(0, limit).map((item) => (
					<img
						key={item.name}
						src={require(`../../assets/images/${item.name}`)}
						alt=''
						className='img'
					/>
				))}
			</div>
			{limit <= max && (
				<button
					disabled={limit >= max}
					onClick={handleShowMoreImages}
					className='more-btn'
				>
					Load More
				</button>
			)}
		</div>
	);
};

export default Characters;
