type CardProps = {
    children: React.ReactNode;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
  };
  
  export function Card({
    children,
    className = "",
    as: Tag = "div",
  }: CardProps) {
    return (
      <Tag
        className={`
          rounded-2xl border border-neutral-200 
          bg-white/50 backdrop-blur-sm 
          shadow-sm transition-shadow
          hover:shadow-md
          ${className}
        `}
      >
        {children}
      </Tag>
    );
  }
  
  export function CardHeader({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <div className={`p-6 pb-0 ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardTitle({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <h3 className={`text-xl font-semibold text-neutral-900 tracking-tight ${className}`}>
        {children}
      </h3>
    );
  }
  
  export function CardDescription({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <p className={`text-neutral-600 mt-2 text-sm leading-relaxed ${className}`}>
        {children}
      </p>
    );
  }
  
  export function CardContent({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <div className={`p-6 pt-0 ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardFooter({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <div className={`p-6 pt-0 border-t border-neutral-200 ${className}`}>
        {children}
      </div>
    );
  }