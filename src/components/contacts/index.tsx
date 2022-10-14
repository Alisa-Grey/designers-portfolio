import React from 'react';
import Obfuscate from 'react-obfuscate';
import './style.sass';

const Contacts: React.FC = () => {
	return (
		<section className='section contacts' id='contacts'>
			<h2 className='section__heading'>Contact Us</h2>
			<>
				<Obfuscate
					email='a.babaev@alicegamesfze.com'
					headers={{
						subject: 'Message for Tough Art',
					}}
					className='contacts__link link-reset btn-reset'
					data-copywrite='Email icons created by Smashicons - Flaticon'
				/>
			</>

			<div className='contacts__img'></div>
		</section>
	);
};

export default Contacts;
