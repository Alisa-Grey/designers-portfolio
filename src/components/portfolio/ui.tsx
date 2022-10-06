import React, { useState } from 'react';
import './style.sass';

const ui = [
	{ name: 'ui_ns_1.jpg', alt: 'New slots UI fragment' },
	{ name: 'ui_ns_5.jpg', alt: 'New slots UI fragment' },
	{ name: 'ui_ns_2.jpg', alt: 'New slots UI fragment' },
	{ name: 'ui_ns_3.jpg', alt: 'New slots UI fragment' },
	{ name: 'ui_ns_4.jpg', alt: 'New slots UI fragment' },
	{ name: 'ui_rs_2.jpg', alt: 'Royal slots UI fragment' },
	{ name: 'ui_rs_1.jpg', alt: 'Royal slots UI fragment' },
	{ name: 'ui_rs_3.jpg', alt: 'Royal slots UI fragment' },
	{ name: 'ui_sf_1.jpg', alt: 'Summer friends UI fragment' },
	{ name: 'ui_sf_4.jpg', alt: 'Summer friends UI fragment' },
	{ name: 'ui_sf_2.jpg', alt: 'Summer friends UI fragment' },
	{ name: 'ui_sf_3.jpg', alt: 'Summer friends UI fragment' },
	{ name: 'ui_sf_5.jpg', alt: 'Summer friends UI fragment' },
	{ name: 'ui_sf_6.jpg', alt: 'Summer friends UI fragment' },
];

const UI: React.FC = () => {
	const [limit, setLimit] = useState(4);
	const max = ui.length - 1;
	const handleShowMoreImages = (): void => {
		if (limit <= max) {
			setLimit(limit + 2);
		}
	};
	return (
		<div className='category-wrap ui' id='ui'>
			<h3 className='section__subheading'>UX/UI</h3>
			<div className='img-wrap ui__img-wrap'>
				{ui.slice(0, limit).map((item) => (
					<img
						key={item.name}
						src={require(`../../assets/images/${item.name}`)}
						alt={item.alt}
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

export default UI;
