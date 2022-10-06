import React from 'react';
import Animations from './animations';
import Characters from './characters';
import Items from './items';
import Locations from './loactions';
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
				<Locations />
				<Items />
				<Animations />
				<UI />
				<Slots />
				<Motion />
			</div>
		</section>
	);
};

export default Portfolio;
