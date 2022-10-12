import React from 'react';
import Category from '../common/category';
import './style.sass';

export const animation = [
	{ name: 'fairy1.webp', alt: 'Animated fairy' },
	{ name: 'fairy2.webp', alt: 'Animated fairy' },
	{ name: 'fairy3.webp', alt: 'Animated fairy' },
	{ name: 'fairy4.webp', alt: 'Animated fairy' },
	{ name: 'girl_in_white.webp', alt: 'Animated girl in white' },
	{ name: 'dog1.webp', alt: 'Animated dog' },
	{ name: 'frog_coctail.webp', alt: 'Animated frog with coctail' },
	{ name: 'cat.webp', alt: 'Animated cat' },
	{ name: 'fish1.webp', alt: 'Animated fish' },
	{ name: 'et.webp', alt: 'Animated ET' },
	// { name: 'frog-ball.webp', alt: 'Animated frog playing the ball' },
	{ name: 'fish2.webp', alt: 'Animated fish' },
	{ name: 'swords.webp', alt: 'Animated swords' },
	{ name: 'polar_bear.webp', alt: 'Animated polar bear' },
	{ name: 'hearts.webp', alt: 'Animated hearts' },
	{ name: 'bull.webp', alt: 'Animated bull' },
	{ name: 'japanese_pink.gif', alt: 'Animated Japanese woman in pink' },
	{ name: 'pig.webp', alt: 'Animated pig sending kiss' },
	{ name: 'beast2.webp', alt: 'Animated beast' },
	{ name: 'beast3.webp', alt: 'Animated beast' },
	{ name: 'beast1.webp', alt: 'Animated beast' },
	{ name: 'eagle.webp', alt: 'Animated eagle' },
	{ name: 'puma.webp', alt: 'Animated puma' },
	{ name: 'bison.webp', alt: 'Animated running bison' },
	{ name: 'bear.webp', alt: 'Animated bear' },
	{ name: 'wolf_realistic.webp', alt: 'Animated wolf' },
	{ name: 'musician_rooster.webp', alt: 'Animated rooster playing music' },
	{ name: 'musician_donkey.webp', alt: 'Animated donkey playing music' },
	{ name: 'musician_dog.webp', alt: 'Animated dog playing music' },
	{ name: 'wolf.webp', alt: 'Animated wolf' },
	{ name: 'fox.webp', alt: 'Animated fox' },
	{ name: 'snow_leopard.webp', alt: 'Animated snow leopard' },
	{ name: 'japanese_green.webp', alt: 'Animated Japanese woman in green' },
	{ name: 'japanese_yellow.webp', alt: 'Animated Japanese woman in yellow' },
	{ name: 'japanese_blue.webp', alt: 'Animated Japanese woman in blue' },
	// { name: 'coala.webp', alt: 'Animated coala' },
	// { name: 'chicken.webp', alt: 'Animated chicken' },
];

const Animations: React.FC = () => {
	return (
		<Category
			categoryName={'animation'}
			data={animation}
			itemsLimit={5}
			assetsSource={'animation'}
		/>
	);
};

export default Animations;
