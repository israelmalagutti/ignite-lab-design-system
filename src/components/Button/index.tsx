import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = (
  {
    children,
    asChild = false,
    className,
    ...props
  }
) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      {...props}
      className={clsx(
        'bg-cyan-500 text-black w-full px-3 py-4 gap-2 rounded font-semibold font-sans terxt-sm hover:bg-cyan-300 transition-colors focus:ring-2 ring-white',
        className
      )}
    >
      {children}
    </Comp>
  );
}

export { Button };
