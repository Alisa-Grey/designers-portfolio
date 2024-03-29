import React from 'react';
import Category from '../common/category';
import './style.sass';

export const items = [
	{ name: 'items2_slots.jpg', alt: 'Items from New Slot' },
	{ name: 'items_slots.jpg', alt: 'Items from New Slots' },
	{ name: 'items_alice.jpg', alt: 'Items from WonderMatch' },
	{ name: 'items2_royal.jpg', alt: 'Items from Royal slots' },
	{ name: 'items2_summer.jpg', alt: 'Items from New Slots' },
	{ name: 'items3_slots.jpg', alt: 'Items from New Slots' },
	{ name: 'items4_summer.jpg', alt: 'Items from New Slots' },
	{ name: 'items3_summer.jpg', alt: 'Items from New Slots' },
	{ name: 'items1_royal.jpg', alt: 'Items from Royal slots' },
	{ name: 'items4_slots.jpg', alt: 'Items from New Slots' },
];

const Items: React.FC = () => {
	return (
		<Category
			categoryName={'items'}
			data={items}
			itemsLimit={4}
			hasModal={true}
			assetsSource={'images'}
		/>
	);
};

export default Items;
