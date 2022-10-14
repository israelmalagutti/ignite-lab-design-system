import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
};

export interface TextInputIconProps {
  children: ReactNode;
};

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
};
