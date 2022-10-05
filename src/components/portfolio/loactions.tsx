import React, { useState } from 'react';
import './style.sass';

const loactions = [
	{
		name: 'alice_location1.jpg',
		alt: 'WonderMatch location - magic forest',
	},
	{
		name: 'alice_location2.jpg',
		alt: 'WonderMatch location - Cheshire cat stone',
	},
	{
		name: 'alice_location3.jpg',
		alt: 'WonderMatch location - greenhouse',
	},
	{
		name: 'alice_location4.jpg',
		alt: 'WonderMatch location - garden',
	},
	{ name: 'alice_location5.jpg', alt: 'WonderMatch location - sea' },
	{ name: 'alice_location6.jpg', alt: 'WonderMatch location - house' },
	{
		name: 'alice_location7.jpg',
		alt: 'WonderMatch location - living room',
	},
	{
		name: 'alice_location8.jpg',
		alt: 'WonderMatch location - cellar',
	},
	{
		name: 'royal_location1.jpg',
		alt: 'Royal slots location - mansion and garden',
	},
	{ name: 'royal_location2.jpg', alt: 'Royal slots location - bedroom' },
	{ name: 'royal_location3.jpg', alt: 'Royal slots location - bathroom' },
	{ name: 'royal_location6.jpg', alt: 'Royal slots location - stairs' },
	{ name: 'royal_location4.jpg', alt: 'Royal slots location - pier' },
	{ name: 'royal_location5.jpg', alt: 'Royal slots location - swimming pool' },
	{ name: 'slot_location5.jpg', alt: 'New slots location - grocery store' },
	{ name: 'slot_location2.jpg', alt: 'New slots location - oriental garden' },
	{ name: 'slot_location4.jpg', alt: 'New slots location - tiki island' },
	{ name: 'slot_location6.jpg', alt: 'New slots location - desert at night' },
	{ name: 'slot_location1.jpg', alt: 'New slots location - canyon' },
	{ name: 'slot_location3.jpg', alt: 'New slots location - meadow' },
];

const Locations: React.FC = () => {
	const [limit, setLimit] = useState(3);
	const max = loactions.length - 1;
	const handleShowMoreImages = (): void => {
		if (limit <= max) {
			setLimit(limit + limit);
		}
	};
	return (
		<div className='category-wrap locctions'>
			<h3 className='section__subheading'>Backgrounds, locations</h3>
			<div className='img-wrap locations__img-wrap'>
				{loactions.slice(0, limit).map((item, index) => (
					<img
						key={item.name}
						src={require(`../../assets/images/${item.name}`)}
						alt=''
						className={`locations__img i${index + 1}`}
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

export default Locations;
