import { ReactNode } from "react";

export interface TextProps {
  asChild?: boolean;
  className?: string;

  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
};
