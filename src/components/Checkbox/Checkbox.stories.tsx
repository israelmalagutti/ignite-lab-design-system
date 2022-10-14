import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '.';
import { Text } from '../Text';

import { CheckboxProps } from './types';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
      (Story) => {
        return (
          <div className='flex items-center gap-2'>
            {Story()}
            <Text>Lembrar de mim por 30 dias</Text>
          </div>
        )
      }
    ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
