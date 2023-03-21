import React, { useState } from 'react';
import './style.sass';

const portfolioLinks = [
	{ id: 'items', text: 'Items' },
	{ id: 'ui', text: 'UX/UI' },
];

const Sidebar: React.FC = () => {
	const [isActive, setIsActive] = React.useState(false);
	const sidebarRef = React.useRef<HTMLDivElement>(null);
	const [matches, setMatches] = useState(
		window.matchMedia('(max-width: 800px)').matches
	);

	React.useEffect(() => {
		window
			.matchMedia('(max-width: 800px)')
			.addEventListener('change', (e) => setMatches(e.matches));
	}, []);

	const toggleSidebar = (): void => {
		setIsActive(!isActive);
	};

	return (
		<div className='sidebar'>
			{matches && (
				<div
					className='sidebar__icon'
					onClick={toggleSidebar}
					title='Open Categories'
				>
					<span className='dot'></span>
					<span className='dot'></span>
					<span className='dot'></span>
				</div>
			)}
			<div
				className={`sidebar__wrap ${isActive ? 'is-active' : ''}`}
				ref={sidebarRef}
			>
				<h2 className='sidebar__title'>Art categories:</h2>
				<nav className='sidebar__nav sidebar-nav'>
					<ul className='list-reset sidebar-nav__list'>
						{portfolioLinks.map((item) => (
							<li
								className='sidebar-nav__item'
								key={item.id}
								onClick={toggleSidebar}
							>
								<a
									href={`#${item.id}`}
									className='link-reset sidebar-nav__link'
								>
									{item.text}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
