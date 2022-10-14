import { ReactNode } from "react";

export interface TextProps {
  asChild?: boolean;

  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
};
