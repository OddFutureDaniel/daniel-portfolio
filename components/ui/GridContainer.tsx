// components/GridContainer.tsx
import { HTMLAttributes } from 'react';

interface GridContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function GridContainer({ 
  children, 
  className = "",
  ...props 
}: GridContainerProps) {
  return (
    <div className={`grid grid-cols-12 gap-6 px-6 ${className}`} {...props}>
      {children}
    </div>
  );
}