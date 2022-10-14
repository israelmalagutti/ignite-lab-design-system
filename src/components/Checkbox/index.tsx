import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

import { CheckboxProps } from "./types";

const Checkbox: React.FC<CheckboxProps> = (props) => {

  return (
    <CheckboxPrimitive.Root
      {...props}
      className='bg-gray-800 flex gap-2 h-6 w-6 p-[2px] rounded'
    >
      <CheckboxPrimitive.Indicator>
        <Check weight='bold' className='h-5 w-5 text-cyan-500' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
