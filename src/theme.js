import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#405673',
    },
    error: {
      main: red.A400,
    },
    background : {
      default: '#FFFF',
    },
  },
});

export default theme;