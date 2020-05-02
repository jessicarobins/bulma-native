import {
  Description,
  DocsStory,
  Props,
  Title,
} from '@storybook/addon-docs/blocks';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Button</Title>
          <Description />
          <DocsStory id="button--simple" />
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

export const simple = () => <Button>Basic Button</Button>;
