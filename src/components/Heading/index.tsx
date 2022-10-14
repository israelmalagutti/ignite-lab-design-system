import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

import { HeadingProps } from "./types";

const Heading: React.FC<HeadingProps> = (
  {
    children,
    size = 'md',
    asChild = false
  }
) => {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp className={
      clsx(
        'text-gray-100 font-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        }
      )}
    >
      {children}
    </Comp>
  );
}

export { Heading };
