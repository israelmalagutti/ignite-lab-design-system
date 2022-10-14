import { ReactNode } from "react";

export interface HeadingProps {
  asChild?: boolean;

  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
};
