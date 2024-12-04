import React from 'react';
import { cn } from '../lib/utils';

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ScrollArea({ children, className, ...props }: ScrollAreaProps) {
  return (
    <div
      className={cn(
        "flex overflow-x-auto scrollbar-hide px-4 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}