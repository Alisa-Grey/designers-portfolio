import React from 'react';
import './style.sass';

const portfolioLinks = [
	{ id: 'characters', text: 'Characters' },
	{ id: 'environment', text: 'Environment' },
	{ id: 'slots', text: 'Slots' },
	{ id: 'ui', text: 'UX/UI' },
	{ id: 'items', text: 'Items' },
	// { id: 'animation', text: 'Animation' },
	{ id: 'motion', text: 'Motion design' },
];

const Sidebar: React.FC = () => {
	return (
		<div className='sidebar'>
			<h2 className='sidebar__title'>Art categories:</h2>
			<nav className='sidebar__nav sidebar-nav'>
				<ul className='list-reset sidebar-nav__list'>
					{portfolioLinks.map((item) => (
						<li className='sidebar-nav__item' key={item.id}>
							<a href={`#${item.id}`} className='link-reset sidebar-nav__link'>
								{item.text}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
