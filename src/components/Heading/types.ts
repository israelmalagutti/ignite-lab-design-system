import { ReactNode } from "react";

export interface HeadingProps {
  asChild?: boolean;
  className?: string;

  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
};
