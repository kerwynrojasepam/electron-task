import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => createStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  icon: {
    padding: theme.spacing(0, 1)
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '50%'
    }
  },
  inputRoot: {
    color: 'inherit !important',
    padding: theme.spacing(0, 1)
  }
}));
