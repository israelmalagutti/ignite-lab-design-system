import { Meta, StoryObj } from '@storybook/react';
import { EnvelopeSimple } from 'phosphor-react';

import { TextInput } from '.';

import { TextInputRootProps } from './types';

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
      children: [
          <TextInput.Input placeholder='Type your email address' />
      ],
    },
    argTypes: {
      children: {
        table: {
          disable: true,
        },
      },
    },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
        <TextInput.Icon>
          <EnvelopeSimple />
        </TextInput.Icon>,
        <TextInput.Input placeholder='Type your email address' />
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
