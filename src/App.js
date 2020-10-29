import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

import { LoginProvider } from './contexts/LoginContext';
import Routes from './Routes';

function App() {
	return (
		<LoginProvider>
			<Router>
				<div>
					<Navbar />
					<Routes/>
				</div>
			</Router>
		</LoginProvider>
	);
}

export default App;
