import { green, orange, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import "@fontsource/charis-sil";
import "@fontsource/merriweather";

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }

const Testtheme = createTheme({
    palette: {
        primary: {
          main: "#bf5700",
        },
        secondary: {
          main: "#333f48",
        },
      },
      status: {
        danger: orange[500],
      },
      typography: {
        fontSize: 12,
        fontFamily: [
          'Merriweather',
        ].join(','),
      },
  });

export default Testtheme; 