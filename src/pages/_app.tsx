import { ThemeProvider } from 'styled-components';
import db from '../../db.json';

import GlobalStyle from '../styles/global';

export default function App({ Component, pageProps }) {
   return (
      <ThemeProvider theme={db.theme}>
         <GlobalStyle />
         <Component {...pageProps} />
      </ThemeProvider>
   );
}
