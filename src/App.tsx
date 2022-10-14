import React from 'react';
import Header from './components/header';
import Portfolio from './components/portfolio';
import Brief from './components/brief';
import About from './components/about';
import Contacts from './components/contacts';
import Sidebar from './components/common/sidebar';
import './App.sass';

const App: React.FC = () => {
	return (
		<div className='app'>
			<Header />
			<Sidebar />
			<Portfolio />
			<Brief />
			<About />
			<Contacts />
		</div>
	);
};

export default App;
