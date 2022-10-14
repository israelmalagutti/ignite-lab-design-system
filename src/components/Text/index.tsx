import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

import { TextProps } from "./types";

const Text: React.FC<TextProps> = (
  {
    children,
    size = 'md',
    asChild = false
  }) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp className={
      clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
        }
      )}
    >
      {children}
    </Comp>
  );
}

export { Text };
