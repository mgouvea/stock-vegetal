import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    headings: 'Roboto',
    body: 'Roboto',
  },
  colors: {
    byellow: {
      500: '#F7B800',
      600: '#B69E43',
      700: '#8D761E',
      800: '#645105',
      900: '#3D3000',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'blue.900',
        color: 'blue.50',
      },
    },
  },
});
