import {
	Button,
	IconButton,
	Modal,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useStyles } from '../styles/ModalStyles';
import { LoginContext } from '../contexts/LoginContext';
import { AccountCircle } from '@material-ui/icons';

function Login() {
	const classes = useStyles();
	const [openModal, setOpenModal] = useState(false);
	const { isLogin, changeLogin } = useContext(LoginContext);
	
	const handleClose = () => {
		setOpenModal(false);
	};
	const handleOpen = () => {
		setOpenModal(true);
	};

	const body = (
		<Paper elevation={2} className={classes.paper}>
			<Typography variant='h4' className={classes.title}>
				Login
			</Typography>
			<form className={classes.form}>
				<TextField
					label='Email'
					type='email'
					variant='outlined'
					required
					fullWidth
				/>
				<TextField
					label='Password'
					type='password'
					autoComplete='current-password'
					variant='outlined'
					required
					fullWidth
				/>
				<Button variant='contained' color='primary' onClick={changeLogin}>
					login
				</Button>
			</form>
		</Paper>
	);

	return (
		<>
			{isLogin ? (
				<IconButton
					aria-label='account of current user'
					aria-controls='menu-appbar'
					aria-haspopup='true'
					color='inherit'>
					<AccountCircle />
				</IconButton>
			) : (
				<h1>
					<Button color='inherit' type='button' onClick={handleOpen}>
						Login
					</Button>
					<Modal
						open={openModal}
						onClose={handleClose}
						aria-labelledby='simple-modal-title'
						aria-describedby='simple-modal-description'>
						{body}
					</Modal>
				</h1>
			)}
		</>
	);
}

export default Login;
