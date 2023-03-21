import React from 'react';
import Items from './items';
import UI from './ui';
import './style.sass';

const Portfolio: React.FC = () => {
	return (
		<section className='section portfolio' id='portfolio'>
			<div className='container'>
				<h2 className='section__heading'>Portfolio</h2>
				<Items />
				<UI />
			</div>
		</section>
	);
};

export default Portfolio;
