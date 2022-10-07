import React from 'react';
import './style.sass';

const About: React.FC = () => {
	return (
		<section className='section about' id='about'>
			<div className='container about__container'>
				<h2 className='section__heading'>About Us</h2>
				<p className='about__text'>
					We&nbsp;are experienced creative and art agency, acting
					as&nbsp;a&nbsp;part of&nbsp;gamedev studio.
				</p>
				<p className='about__text'>
					We&nbsp;offer high quality services in&nbsp;following areas:
				</p>
				<ul className='about-list'>
					<li className='about-list__item'>
						2d&nbsp;game art and conceptualization
					</li>
					<li className='about-list__item'>2d&nbsp;animations</li>
					<li className='about-list__item'>
						UI/UX prototyping &amp;&nbsp;design for mobile games
					</li>
					<li className='about-list__item'>UI&nbsp;animations</li>
					<li className='about-list__item'>
						Motion design and video production
					</li>
				</ul>
				<p className='about__text'>
					Our experience includes working on&nbsp;various in-house projects
					in&nbsp;different genres like 2d&nbsp;idle RPG game, social slot
					casino games, casual match three games and&nbsp;VR.
				</p>
				<p className='about__text'>
					Ready to&nbsp;share our skills and experience to&nbsp;help you games
					release and grow. We&nbsp;cherish creativeness, highest quality,
					collaboration and pace which are super critical in&nbsp;modern gamedev
					industry.
				</p>
				<p className='about__text'>
					Contact&nbsp;us and let&rsquo;s build something special together!
				</p>
			</div>
		</section>
	);
};

export default About;
