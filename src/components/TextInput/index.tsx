import { Slot } from "@radix-ui/react-slot";
import { TextInputIconProps, TextInputInputProps, TextInputRootProps } from "./types";

const TextInputRoot: React.FC<TextInputRootProps> = ({ children }) => {
  return (
    <div
      className='bg-gray-800 w-full h-12 flex items-center gap-3 px-3 py-4 rounded focus-within:ring-2 ring-cyan-300'
    >
      {children}
    </div>
  );
};

TextInputRoot.displayName = 'TextInput.Root';

const TextInputIcon: React.FC<TextInputIconProps> = ({ children}) => {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  );
};

TextInputIcon.displayName = 'TextInput.Icon';

const TextInputInput: React.FC<TextInputInputProps> = (props) => {
  return (
      <input
        {...props}
        className='bg-transparent text-gray-100 flex-1 outline-none text-xs placeholder:text-gray-400'
      />
  );
}

TextInputInput.displayName = 'TextInput.Input';

const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
};

export { TextInput };
