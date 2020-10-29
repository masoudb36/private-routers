import React, { useContext } from 'react';

import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { useStyles } from './styles/NavbarStyle';
import { Link } from 'react-router-dom';
import Login from './pages/Login';
import { LoginContext } from './contexts/LoginContext';

function Navbar() {
	const classes = useStyles();
	const { isLogin } = useContext(LoginContext);
	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						<Link to='/'>Private Router</Link>
					</Typography>

					<div className={classes.menu}>
						<Link to='/'>Home</Link>
						<Link to='/about'>About</Link>
						<Link to='/contact'>Contact</Link>
						{isLogin && <>
							<Link to='/private'>Private</Link>
							<Link to='/dashboard'>Dashboard</Link>
						</>}
					</div>
					<Login />
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
