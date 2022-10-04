import React from 'react';
import Header from './components/header';
import Portfolio from './components/portfolio';
import Brief from './components/brief';
import About from './components/about';
import Contacts from './components/contacts';
import './App.sass';

const App: React.FC = () => {
	return (
		<div className='app'>
			<Header />
			<Portfolio />
			<Brief />
			<About />
			<Contacts />
		</div>
	);
};

export default App;
