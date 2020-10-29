import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
	},
	title: {
		textAlign: 'center',
	},
	form: {
		height: 200,
		marginTop: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}));
