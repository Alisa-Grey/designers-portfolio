import React from 'react';
import './style.sass';

const headerLinks = [
	{ id: 'portfolio', text: 'Portfoio' },
	{ id: 'brief', text: 'Brief' },
	{ id: 'about', text: 'About' },
	{ id: 'contacts', text: 'Contacts' },
];

const Header: React.FC = () => {
	const [sticky, setSticky] = React.useState('');
	const [isActive, setIsActive] = React.useState(false);

	const headerRef = React.useRef<HTMLElement>(null);
	const navRef = React.useRef<HTMLElement>(null);
	const linesRef = React.useRef<HTMLDivElement>(null);

	const toggleMenu = (): void => {
		setIsActive(!isActive);
	};

	const isSticky = (): void => {
		/* Method that will fix header after a specific scrollable */
		const scrollTop = window.scrollY;
		const stickyClass = scrollTop >= 250 ? 'sticky' : '';
		setSticky(stickyClass);
	};

	// on render, set listener
	React.useEffect(() => {
		window.addEventListener('scroll', isSticky);
		return () => {
			window.removeEventListener('scroll', isSticky);
		};
	}, []);

	return (
		<header className={`header ${sticky}`} ref={headerRef}>
			<div className='header__container'>
				<img
					src={require('../../assets/images/logo.png')}
					className='header__logo'
					alt='Tough design logo'
				/>
				<div className='burger-container'>
					<input
						type='checkbox'
						className='toggle-menu'
						onChange={toggleMenu}
					/>
					<div
						className={`hamburger-lines ${isActive ? 'is-active' : ''}`}
						ref={linesRef}
					>
						<span className='line line1'></span>
						<span className='line line2'></span>
						<span className='line line3'></span>
					</div>
				</div>
				<nav
					className={`header-nav ${isActive ? 'is-active' : ''}`}
					ref={navRef}
				>
					<ul className='list-reset header-nav__list'>
						{headerLinks.map((item) => (
							<li className='header-nav__item' key={item.id}>
								<a
									href={`#${item.id}`}
									className='header-nav__link link-reset'
									tabIndex={0}
									onClick={(): void => toggleMenu()}
								>
									{item.text}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
