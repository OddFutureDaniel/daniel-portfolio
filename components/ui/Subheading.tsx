import React from "react";

type SubheadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function Subheading({
  children,
  align = "center",
  size = "md",
  className = "",
  ...rest
}: SubheadingProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-4xl",
  }[size];

  // Allow "\n" line breaks in string children
  const processedChildren =
    typeof children === "string"
      ? children.split("\n").map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))
      : children;

  return (
    <h2
      className={`
        text-neutral-500
        ${sizeClasses}
        text-${align}
        ${className}
      `}
      {...rest}
    >
      {processedChildren}
    </h2>
  );
}