import React from 'react';
import Category from '../common/category';
import './style.sass';

export const characters = [
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
	return (
		<Category
			categoryName={'characters'}
			data={characters}
			itemsLimit={4}
			assetsSource={'images'}
			mediaQuery={'(max-width: 800px)'}
			dataAlternative={charactersMobile}
			hasModal={true}
		/>
	);
};

export default Characters;
