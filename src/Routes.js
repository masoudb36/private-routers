import React, { useContext } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginContext } from './contexts/LoginContext';
import DashBoard from './pages/DashBoard';
import PrivateRoute from './pages/PrivateRoute';

const Routes = () => {
	const { isLogin } = useContext(LoginContext);

	console.log(isLogin);

	return (
		<Switch>
			<Route exact path='/' render={() => <Home />} />
			<Route exact path='/about' render={() => <About />} />
			<Route exact path='/contact' render={() => <Contact />} />
			{isLogin && (
				<>
					<Route exact path='/dashboard' render={() => <DashBoard />} />
					<Route exact path='/private' render={() => <PrivateRoute />} />
				</>
			)}
			<Redirect to='/' />
		</Switch>
	);
};

export default Routes;
