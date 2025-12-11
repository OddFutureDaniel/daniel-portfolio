

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  size?: "sm" | "md" | "lg";
  // Note: `align` isn't used on the Card itself, only on CardTitle
  align?: "left" | "center" | "right";
};

export function Card({
  children,
  className = "",
  as: Tag = "div",
  size = "md",
}: CardProps) {
  const sizeClasses = {
    sm: "max-w-xs", // ~20rem
    md: "max-w-md", // ~28rem
    lg: "max-w-lg", // ~32rem
  } as const;

  return (
    <Tag
      className={`
        rounded-2xl border border-neutral-200 
        bg-white/50 backdrop-blur-sm 
         transition-shadow
        
        
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}

type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`p-6 pb-0 ${className}`}>{children}</div>;
}

type CardTitleProps = {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

export function CardTitle({
  children,
  className = "",
  align = "center",
}: CardTitleProps) {
  return (
    <h3
      className={`
        ${alignClasses[align]}
        text-xl  text-neutral-900  
        ${className}
      `}
    >
      {children}
    </h3>
  );
}

type CardDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return (
    <div className={`text-neutral-400 mt-2 text-sm leading-relaxed ${className}`}>
      {children}
      </div>
  );
}

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`pt-0 ${className}`}>{children}</div>;
}

type CardFooterProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`p-6 pt-0 border-t border-neutral-200 ${className}`}>
      {children}
    </div>
  );
}