import React from 'react';
import './style.sass';

const vid = [
	{ name: '0059_unicorn.mp4', poster: 'unicorn.jpg' },
	{ name: '0062__38mb.mp4', poster: 'team.jpg' },
	{ name: '0067_16.9_30sec.mp4', poster: 'bazooka.jpg' },
	{ name: '0068_30sec.mp4', poster: 'noob.jpg' },
	{ name: '080_1_Mexico_screen.mp4', poster: 'mexico.jpg' },
	{ name: '0081_1_RSlots_JapanScreen.mp4', poster: 'japan.jpg' },
	// check cover
	{ name: '083_1_3MainScreens.mp4', poster: 'party.jpg' },
	{ name: 'slots_party.mp4', poster: 'party.jpg' },
];

const Motion: React.FC = () => {
	const [limit, setLimit] = React.useState(1);
	const max = vid.length - 1;
	const handleShowMoreImages = (): void => {
		if (limit <= max) {
			setLimit(limit + 1);
		}
	};
	return (
		<div className='category-wrap motion' id='motion'>
			<h3 className='section__subheading'>Motion design</h3>
			<div className='motion__wrap'>
				{vid.slice(0, limit).map((item) => (
					<video
						key={item.name}
						className='video'
						controls
						preload='none'
						poster={require(`../../assets/video/${item.poster}`)}
					>
						<source
							src={require(`../../assets/video/${item.name}`)}
							type='video/mp4'
						/>
					</video>
				))}
				{limit <= max && (
					<button onClick={handleShowMoreImages} className='more-btn'>
						Show More
					</button>
				)}
			</div>
		</div>
	);
};

export default Motion;
