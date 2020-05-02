import React from 'react';
import {
  Description,
  DocsStory,
  Props,
  Title,
} from '@storybook/addon-docs/blocks';
import Box from './Box';

export default {
  title: 'Elements/Box',
  component: Box,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Box</Title>
          <Description />
          <DocsStory id="elements-box--simple" />
          <Props />
        </>
      ),
    },
  },
};

export const simple = () => <Box>Basic Box</Box>;
