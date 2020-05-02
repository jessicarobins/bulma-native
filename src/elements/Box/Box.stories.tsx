import {
  Description,
  DocsStory,
  Props,
  Title,
} from '@storybook/addon-docs/blocks';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React from 'react';
import Box from './Box';
import { ThemeProvider, theme } from '../../theme';

export default {
  title: 'Box',
  component: Box,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Box</Title>
          <Description />
          <DocsStory id="box--simple" />
          <Props />
        </>
      ),
    },
  },
};

// export const interactive = () => {
//   const props = {
//     isOpen: true,
//     cancelText: text('cancelText', 'Cancel'),
//     confirmText: text('confirmText', 'Confirm'),
//     onClose: action('You closed the ConfirmationModal!'),
//     onConfirm: action('You confirmed the ConfirmationModal!'),
//     title: text('title', 'title'),
//   };

//   return (
//     <ConfirmationModal {...props}>
//       <p>{text('children', 'content')}</p>
//     </ConfirmationModal>
//   );
// };

export const simple = () => (
  <ThemeProvider value={theme}>
    <Box>Basic Box</Box>
  </ThemeProvider>
);
