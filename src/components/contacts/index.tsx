import React from 'react';
import './style.sass';

const Contacts: React.FC = () => {
	return (
		<section className='section contacts' id='contacts'>
			<h2 className='section__heading'>Contact Us</h2>
			<a
				href='mailto:a.babaev@alicegamesfze.com'
				className='contacts__link link-reset btn-reset'
				data-copywrite='Email icons created by Smashicons - Flaticon'
			>
				a.babaev@alicegamesfze.com
			</a>
			<div className='contacts__img'></div>
		</section>
	);
};

export default Contacts;
