type SubheadingProps = {
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
  }: SubheadingProps) {
    const sizeClasses = {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-4xl",
    }[size];
  
    // If children is a string, allow line breaks using "\n"
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
          font-semibold tracking-tight text-neutral-700
          ${sizeClasses}
          text-${align}
          ${className}
        `}
      >
        {processedChildren}
      </h2>
    );
  }