import { createMuiTheme } from '@material-ui/core/styles';
import { cyan, teal } from '@material-ui/core/colors';

const outerTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#8e24aa',
            //   main: '#038C7F',
        },
        secondary: {
            main: '#F2E7DC',
        },
        accent: {
            main: '#f00'
        }
    },
});

export default outerTheme
