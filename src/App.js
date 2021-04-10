import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import Storybook from '../storybook';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Storybook />
    </ThemeProvider>
  );
};

export default App;
