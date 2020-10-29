import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
		'& a': {
			color: theme.palette.common.white,
			textDecoration: 'none',
		},
	},
	menu: {
		flexGrow: 1,
		'& a': {
			color: theme.palette.common.white,
			textDecoration: 'none',
            margin: theme.spacing(0, 2),
            
		},
	},
}));
