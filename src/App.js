import './App.css';
import { createTheme, MantineProvider, Button } from '@mantine/core';
import { ColorSchemeScript } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      Hola andres soy rr
    </MantineProvider>
  );
}

export default App;
