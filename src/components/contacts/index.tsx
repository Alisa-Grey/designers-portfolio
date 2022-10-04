import React from 'react';
import './style.sass';

const Contacts: React.FC = () => {
	return (
		<section className='section contacts' id='contacts'>
			<h2 className='section__heading'>Contact Us</h2>
			<a
				href='mailto:example@email.com'
				className='contacts__link link-reset btn-reset'
				data-copywrite='Email icons created by Smashicons - Flaticon'
			>
				example@email.com
			</a>
		</section>
	);
};

export default Contacts;
