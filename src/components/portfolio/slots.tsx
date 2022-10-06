import React, { useState } from 'react';
import './style.sass';

const slots = [
	{ name: 'event_halloween1.jpg', alt: 'New Slots - Halloween' },
	{ name: 'slot_classic.jpg', alt: 'New Slots - classic slot' },
	{ name: 'slot_ninja.jpg', alt: 'New slots - ninja' },
	{ name: 'event_ny2.jpg', alt: 'New Slots - New year, village' },
	{ name: 'event_ny.jpg', alt: 'New Slots - New year, christmas tree' },
	{ name: 'slot_cabaret.jpg', alt: 'New Slots - cabaret' },
	{ name: 'slot_japan.jpg', alt: 'New slots - Japanese' },
	{ name: 'slot_japan2.jpg', alt: 'New slots - Japanese' },
	{ name: 'slot_oz.jpg', alt: 'New slots - the wizzard of Oz' },
	{ name: 'slot_pinup.jpg', alt: 'New slots - Pin up' },
	{ name: 'slot_fireman.jpg', alt: 'New slots - Fireman' },
	{ name: 'event_pick.jpg', alt: 'New slots - Event pick' },
	{ name: 'slot_buffalo.jpg', alt: 'New slots - Buffalo' },
	{ name: 'slot_doctor.jpg', alt: 'New slots - Doctor' },
	{ name: 'slot_robbery.jpg', alt: 'New slots - Robbery' },
	{ name: 'slot_tennis.jpg', alt: 'New slots - Tennis' },
	{ name: 'slot_kong.jpg', alt: 'New slots - King Kong' },
	{ name: 'slot_usa.jpg', alt: 'New slots - USA' },
	{ name: 'slot_aztec.jpg', alt: 'New slots - Aztec treasures' },
	{ name: 'slot_poker.jpg', alt: 'New slots - poker' },
	{ name: 'slot_sherlock.jpg', alt: 'New slots - Sherlock' },
	{ name: 'slot_troy1.jpg', alt: 'New slots - Troy' },
	{ name: 'slot_troy2.jpg', alt: 'New slots - Troy' },
	{ name: 'slot_sparta.jpg', alt: 'New slots - Sparta' },
];

const Slots: React.FC = () => {
	const [limit, setLimit] = useState(3);
	const max = slots.length - 1;
	const handleShowMoreImages = (): void => {
		if (limit <= max) {
			setLimit(limit + limit);
		}
	};
	return (
		<div className='category-wrap slots' id='slots'>
			<h3 className='section__subheading'>Slots</h3>
			<div className='img-wrap slots__img-wrap'>
				{slots.slice(0, limit).map((item) => (
					<img
						key={item.name}
						src={require(`../../assets/images/${item.name}`)}
						alt=''
						className='img slots__img'
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

export default Slots;
