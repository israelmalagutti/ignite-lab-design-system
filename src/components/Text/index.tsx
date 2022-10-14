import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

import { TextProps } from "./types";

const Text: React.FC<TextProps> = (
  {
    asChild = false,
    className,

    children,
    size = 'md',
  }
) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp className={
      clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}

export { Text };
