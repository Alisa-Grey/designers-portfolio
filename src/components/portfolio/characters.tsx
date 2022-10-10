import React, { useState } from 'react';
import './style.sass';

const characters = [
	{
		name: 'alice_characters.jpg',
		alt: ' WonderMatch characters',
	},
	{ name: 'char15_slots.jpg', alt: 'New slots characters' },
	{ name: 'char_13_slots.jpg', alt: 'New slots characters' },
	{ name: 'char8_slots.jpg', alt: 'New slots characters' },
	{ name: 'char4_slots.jpg', alt: 'New slots characters' },
	{ name: 'char7_slots.jpg', alt: 'New slots characters' },
	{ name: 'char2_slots.jpg', alt: 'New slots characters' },
	{ name: 'char6_slots.jpg', alt: 'New slots characters' },
	{ name: 'char10_slots.jpg', alt: 'New slots characters' },
	{ name: 'char_14_slots.jpg', alt: 'New slots characters' },
	{
		name: 'slot_characters1.jpg',
		alt: 'New slots characters - animals',
	},
	{ name: 'char11_slots.jpg', alt: 'New slots characters' },
	{ name: 'char12_slots.jpg', alt: 'New slots characters' },
	{ name: 'char1_slots.jpg', alt: 'New slots characters' },
	{ name: 'char3_royal_slots.jpg', alt: 'Royal slots characters' },
	{ name: 'char1_royal.jpg', alt: 'Royal slots characters' },
	{ name: 'char4_royal_slots.jpg', alt: 'Royal slots characters' },
	{
		name: 'summer_characters.jpg',
		alt: 'Summer friends characters',
	},
	{ name: 'char5_slots.jpg', alt: 'New slots characters' },
	{ name: 'char16_slots.jpg', alt: 'New slots characters' },
	{ name: 'char3_slots.jpg', alt: 'New slots characters' },
];

const charactersMobile = [
	{ name: 'mob_alice_chars1.jpg', alt: 'WonderMatch characters' },
	{ name: 'mob_alice_chars2.jpg', alt: 'WonderMatch characters' },
	{ name: 'mob_alice_chars3.jpg', alt: 'WonderMatch characters' },
	{ name: 'mob_summer_friend1.jpg', alt: 'Summer friends characters' },
	{ name: 'mob_summer_friend3.jpg', alt: 'Summer friends characters' },
	{ name: 'mob_summer_friend12.jpg', alt: 'Summer friends characters' },
	{ name: 'mob_animals_slots1.jpg', alt: 'New slots animals' },
	{ name: 'mob_animals_slots2.jpg', alt: 'New slots animals' },
	{ name: 'mob_animals_slots3.jpg', alt: 'New slots animals' },
	{ name: 'char15_slots.jpg', alt: 'New slots characters' },
	{ name: 'char_13_slots.jpg', alt: 'New slots characters' },
	{ name: 'char8_slots.jpg', alt: 'New slots characters' },
	{ name: 'char4_slots.jpg', alt: 'New slots characters' },
	{ name: 'char7_slots.jpg', alt: 'New slots characters' },
	{ name: 'char2_slots.jpg', alt: 'New slots characters' },
	{ name: 'char6_slots.jpg', alt: 'New slots characters' },
	{ name: 'char10_slots.jpg', alt: 'New slots characters' },
	{ name: 'char_14_slots.jpg', alt: 'New slots characters' },
	{ name: 'char11_slots.jpg', alt: 'New slots characters' },
	{ name: 'char12_slots.jpg', alt: 'New slots characters' },
	{ name: 'char1_slots.jpg', alt: 'New slots characters' },
	{ name: 'char3_royal_slots.jpg', alt: 'Royal slots characters' },
	{ name: 'char1_royal.jpg', alt: 'Royal slots characters' },
	{ name: 'char4_royal_slots.jpg', alt: 'Royal slots characters' },
	{ name: 'char5_slots.jpg', alt: 'New slots characters' },
	{ name: 'char3_slots.jpg', alt: 'New slots characters' },
	{ name: 'char16_slots.jpg', alt: 'New slots characters' },
];

const Characters: React.FC = () => {
	const [matches, setMatches] = useState(
		window.matchMedia('(max-width: 800px)').matches
	);
	const [limit, setLimit] = useState(4);
	const max = characters.length - 1;
	const handleShowMoreImages = (): void => {
		if (limit <= max) {
			setLimit(limit + 6);
		}
	};

	React.useEffect(() => {
		window
			.matchMedia('(max-width: 800px)')
			.addEventListener('change', (e) => setMatches(e.matches));
	}, []);
	return (
		<div className='category-wrap characters' id='characters'>
			<h3 className='section__subheading'>Characters</h3>
			<div className='img-wrap characters__img-wrap'>
				{!matches &&
					characters
						.slice(0, limit)
						.map((item) => (
							<img
								key={item.name}
								src={require(`../../assets/images/${item.name}`)}
								alt=''
								className='img'
							/>
						))}
				{matches &&
					charactersMobile
						.slice(0, limit)
						.map((item) => (
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
					Show More
				</button>
			)}
		</div>
	);
};

export default Characters;
