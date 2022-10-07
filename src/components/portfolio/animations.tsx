import React from 'react';
import './style.sass';

const animation = [
	{ name: 'girl_pink_dress.webp', alt: 'Animated girl in pink dress' },
	{ name: 'fairy1.webp', alt: 'Animated fairy' },
	{ name: 'fairy2.webp', alt: 'Animated fairy' },
	{ name: 'fairy3.webp', alt: 'Animated fairy' },
	{ name: 'fairy4.webp', alt: 'Animated fairy' },
	{ name: 'bear.webp', alt: 'Animated bear' },
	{ name: 'pig.webp', alt: 'Animated pig sending kiss' },
	{ name: 'eagle.webp', alt: 'Animated eagle' },
	{ name: 'beast_1.webp', alt: 'Animated beast' },
	{ name: 'bull.webp', alt: 'Animated bull' },
	{ name: 'beast_2.webp', alt: 'Animated beast' },
	{ name: 'magician.webp', alt: 'Animated wizzard' },
	{ name: 'girl_crown.webp', alt: 'Animated girl in crown' },
	{ name: 'wolf.webp', alt: 'Animated wolf' },
	{ name: 'snow_leopard.webp', alt: 'Animated snow leopard' },
	{ name: 'fox.webp', alt: 'Animated fox' },
	{ name: 'et.webp', alt: 'Animated ET' },
	{ name: 'frog_coctail.webp', alt: 'Animated frog with coctail' },
	{ name: 'dog2.webp', alt: 'Animated dog' },
	{ name: 'bison.webp', alt: 'Animated running bison' },
	{ name: 'summer_friends1.webp', alt: 'Animated summer friends' },
	{ name: 'polar_bear.webp', alt: 'Animated polar bear' },
	{ name: 'summer_friends2.webp', alt: 'Animated summer friends' },
	{ name: 'fish1.webp', alt: 'Animated fish' },
	{ name: 'chicken.webp', alt: 'Animated chicken' },
	{ name: 'coala.webp', alt: 'Animated coala' },
	{ name: 'fish2.webp', alt: 'Animated fish' },
	{ name: 'dog1.webp', alt: 'Animated dog' },
	{ name: 'musician_rooster.webp', alt: 'Animated rooster playing music' },
	{ name: 'musician_donkey.webp', alt: 'Animated donkey playing music' },
	{ name: 'musician_dog.webp', alt: 'Animated dog playing music' },
	{ name: 'musician_cat.webp', alt: 'Animated cat playing music' },
	{ name: 'frog-ball.webp', alt: 'Animated frog playing the ball' },
	{ name: 'chicken_pool.webp', alt: 'Animated chicken in pool' },
];

const Animations: React.FC = () => {
	const [limit, setLimit] = React.useState(5);
	const max = animation.length - 1;
	const handleShowMoreImages = (): void => {
		if (limit <= max) {
			setLimit(limit + 7);
		}
	};
	return (
		<div className='category-wrap animation' id='animation'>
			<h3 className='section__subheading'>Animation</h3>
			<div className='img-wrap animation__img-wrap'>
				{animation.slice(0, limit).map((item) => (
					<img
						key={item.name}
						src={require(`../../assets/animation/${item.name}`)}
						alt=''
						className='animation__img'
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

export default Animations;
