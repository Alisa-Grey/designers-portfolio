import React from 'react';
import Characters from './characters';
import Locations from './loactions';
import './style.sass';

const animation = [
	{ name: 'gif-maker-3.webp', alt: 'animation' },
	{ name: 'gif-maker-8.webp', alt: 'animation' },
	{ name: 'gif-maker-9.webp', alt: 'animation' },
	{ name: 'gif-maker-10.webp', alt: 'animation' },
	{ name: 'gif-maker-1.webp', alt: 'animation' },
	{ name: 'gif-maker-6.webp', alt: 'animation' },
	{ name: 'gif-maker-0.webp', alt: 'animation' },
	{ name: 'gif-maker-5.webp', alt: 'animation' },
	{ name: 'gif-maker-7.webp', alt: 'animation' },
	{ name: 'gif-maker-2.webp', alt: 'animation' },
	{ name: 'gif-maker-4.webp', alt: 'animation' },
];

const Portfolio: React.FC = () => {
	const [limit, setLimit] = React.useState(11);
	const max = animation.length - 1;
	const handleShowMoreImages = (): void => {
		if (limit <= max) {
			setLimit(limit + limit);
		}
	};
	return (
		<section className='section portfolio' id='portfolio'>
			<div className='container'>
				<h2 className='section__heading'>Portfolio</h2>
				<Characters />
				<Locations />
				<div className='category-wrap animation'>
					<h3 className='section__subheading'>Animation</h3>
					<div className='img-wrap animation__img-wrap'>
						{animation.slice(0, limit).map((item) => (
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
			</div>
		</section>
	);
};

export default Portfolio;
