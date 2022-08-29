import { ThemeProvider } from '@mui/material/styles'
import Router from "./routes/Router" 
import React from 'react'
import { GlobalStyle } from './global/GlobalStyle'
import theme from './theme/theme'


function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
  );
}
export default App;
