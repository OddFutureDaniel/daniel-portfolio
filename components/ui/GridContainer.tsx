// components/ui/GridContainer.tsx
import { HTMLAttributes } from "react";

interface GridContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function GridContainer({ children, className = "", ...props }: GridContainerProps) {
  return (
    <div
      className={[
        "grid grid-cols-12",
        "mobile:px-4 mid:px-6 desktop:px-6",
        "mobile:gap-4 mid:gap-6 desktop:gap-6",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}