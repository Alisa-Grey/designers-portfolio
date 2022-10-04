import React from 'react';
import './style.sass';

const Portfolio: React.FC = () => {
	return (
		<section className='section portfolio' id='portfolio'>
			<div className='container'>
				<h2 className='section__heading'>Portfolio</h2>
				<h3 className='section__subheading'>Characters</h3>
				<div className='img-wrap-chars'>
					<img
						src={require('../../assets/images/alice_characters.jpg')}
						alt=''
						className='img'
					/>
					<img
						src={require('../../assets/images/char1_slots.jpg')}
						alt=''
						className='img'
					/>
					<img
						src={require('../../assets/images/char3_slots.jpg')}
						alt=''
						className='img'
					/>
					<img
						src={require('../../assets/images/slot_characters1.jpg')}
						alt=''
						className='img'
					/>
					<img
						src={require('../../assets/images/char4_slots.jpg')}
						alt=''
						className='img'
					/>
					<img
						src={require('../../assets/images/char2_slots.jpg')}
						alt=''
						className='img'
					/>
					<img
						src={require('../../assets/images/summer_characters.jpg')}
						alt=''
						className='img'
					/>
				</div>
				<h3 className='section__subheading'>Backgrounds, locations</h3>
				<div className='img-wrap-env'>
					<img
						src={require('../../assets/images/alice_location1.jpg')}
						alt=''
						className='img-env'
					/>
					<img
						src={require('../../assets/images/alice_location2.jpg')}
						alt=''
						className='img-env'
					/>
					<img
						src={require('../../assets/images/alice_location3.jpg')}
						alt=''
						className='img-env'
					/>
					<img
						src={require('../../assets/images/alice_location4.jpg')}
						alt=''
						className='img-env'
					/>
					<img
						src={require('../../assets/images/alice_location5.jpg')}
						alt=''
						className='img-env'
					/>
					<img
						src={require('../../assets/images/alice_location6.jpg')}
						alt=''
						className='img-env'
					/>
					<img
						src={require('../../assets/images/alice_location7.jpg')}
						alt=''
						className='img-env'
					/>
					<img
						src={require('../../assets/images/alice_location8.jpg')}
						alt=''
						className='img-env'
					/>
					<img
						src={require('../../assets/images/royal_location1.jpg')}
						alt=''
						className='img-env'
					/>
					<img
						src={require('../../assets/images/royal_location2.jpg')}
						alt=''
						className='img-env'
					/>
					<img
						src={require('../../assets/images/royal_location3.jpg')}
						alt=''
						className='img-env'
					/>
					<img
						src={require('../../assets/images/royal_location6.jpg')}
						alt=''
						className='img-env'
					/>
					<img
						src={require('../../assets/images/royal_location4.jpg')}
						alt=''
						className='img-env'
					/>
					<img
						src={require('../../assets/images/royal_location5.jpg')}
						alt=''
						className='img-env'
					/>
				</div>
				<h3 className='section__subheading'>Game ui/ux</h3>
				<div className='img-wrap-ui'></div>
			</div>
		</section>
	);
};

export default Portfolio;
