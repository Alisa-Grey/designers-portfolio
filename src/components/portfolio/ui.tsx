import React from 'react';
import Category from '../common/category';
import './style.sass';

export const ui = [
	{ name: 'ui_ns_1.jpg', alt: 'New slots UI fragment' },
	{ name: 'ui_ns_2.jpg', alt: 'New slots UI fragment' },
	{ name: 'ui_ns_3.jpg', alt: 'New slots UI fragment' },
	{ name: 'ui_ns_4.jpg', alt: 'New slots UI fragment' },
];

const UI: React.FC = () => {
	return (
		<Category
			categoryName={'ui'}
			categoryHeading={'UX/UI'}
			data={ui}
			itemsLimit={4}
			hasModal={true}
			assetsSource={'images'}
		/>
	);
};

export default UI;
