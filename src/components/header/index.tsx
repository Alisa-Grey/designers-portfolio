import React from 'react';
import './style.sass';

const Header: React.FC = () => {
	const headerRef = React.useRef<HTMLElement>(null);
	const navRef = React.useRef<HTMLElement>(null);
	const linesRef = React.useRef<HTMLDivElement>(null);

	const [isActive, setIsActive] = React.useState(false);

	const makeSticky = (): void => {
		const headerEl = headerRef.current;
		const scrollTop = window.scrollY;
		scrollTop > +300
			? headerEl?.classList.add('sticky')
			: headerEl?.classList.remove('sticky');
	};

	React.useEffect(() => {
		window.addEventListener('scroll', makeSticky);
		return () => {
			window.removeEventListener('scroll', makeSticky);
		};
	});

	const handleMenuOpen = (e: { target: { checked: any } }): void => {
		if (e.target.checked) {
			navRef.current?.classList.add('is-active');
			linesRef.current?.classList.add('is-active');
		} else {
			navRef.current?.classList.remove('is-active');
			linesRef.current?.classList.remove('is-active');
		}
	};
	return (
		<header className='header' ref={headerRef}>
			<div className='header__container'>
				<h1 className='header__logo'>Logo</h1>
				<div className='burger-container'>
					<input
						type='checkbox'
						className='toggle-menu'
						onChange={handleMenuOpen}
					/>
					<div className='hamburger-lines' ref={linesRef}>
						<span className='line line1'></span>
						<span className='line line2'></span>
						<span className='line line3'></span>
					</div>
				</div>
				<nav className='header-nav' ref={navRef}>
					<ul className='list-reset header-nav__list'>
						<li className='header-nav__item'>
							<a
								href='#portfolio'
								className='header-nav__link link-reset'
								tabIndex={0}
							>
								Portfolio
							</a>
						</li>
						<li className='header-nav__item'>
							<a
								href='#brief'
								className='header-nav__link link-reset'
								tabIndex={0}
							>
								Brief
							</a>
						</li>
						<li className='header-nav__item'>
							<a
								href='#about'
								className='header-nav__link link-reset'
								tabIndex={0}
							>
								About
							</a>
						</li>
						<li className='header-nav__item'>
							<a
								href='#team'
								className='header-nav__link link-reset'
								tabIndex={0}
							>
								Team
							</a>
						</li>
						<li className='header-nav__item'>
							<a
								href='#contacts'
								className='header-nav__link link-reset'
								tabIndex={0}
							>
								Contacts
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
