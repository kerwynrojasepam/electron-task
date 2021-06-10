import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => createStyles({
  root: {},
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolbar: {
    ...theme.mixins.toolbar,
    marginBottom: theme.spacing(6)
  }
}));
