import React from 'react';
import Animations from './animations';
import Characters from './characters';
import Items from './items';
import Environment from './environment';
import Slots from './slots';
import UI from './ui';
import Motion from './motion';
import './style.sass';

const Portfolio: React.FC = () => {
	return (
		<section className='section portfolio' id='portfolio'>
			<div className='container'>
				<h2 className='section__heading'>Portfolio</h2>
				<Characters />
				<Environment />
				<Slots />
				<UI />
				<Items />
				{/* <Animations /> */}
				<Motion />
			</div>
		</section>
	);
};

export default Portfolio;
