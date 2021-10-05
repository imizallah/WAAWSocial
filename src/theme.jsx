import { createTheme } from '@material-ui/core/styles';


export const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#55090e',
      contrastText: '#000',
    },
  },
});