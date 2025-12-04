// components/ui/Button.tsx
import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  loading?: boolean;
};

// If href is provided we treat it as a link
type LinkButtonProps = BaseProps & {
  href: string;
  type?: never;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

// Otherwise it is a normal button
type RegularButtonProps = BaseProps & {
  href?: undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkButtonProps | RegularButtonProps;

function getVariantClasses(variant: ButtonVariant = "primary") {
  switch (variant) {
    case "primary":
      return "bg-black text-white hover:bg-neutral-900";
    case "secondary":
      return "bg-white text-black border border-neutral-300 hover:bg-neutral-100";
    case "ghost":
      return "bg-transparent text-black border border-transparent hover:border-neutral-300";
    default:
      return "";
  }
}

function getSizeClasses(size: ButtonSize = "md") {
  switch (size) {
    case "sm":
      return "px-4 py-2 text-sm";
    case "lg":
      return "px-7 py-4 text-base";
    case "md":
    default:
      return "px-5 py-3 text-sm";
  }
}

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    loading,
    href,
    disabled,
    ...rest
  } = props;

  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-medium shadow-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black";

  const allClasses = [
    baseClasses,
    getVariantClasses(variant),
    getSizeClasses(size),
    (disabled || loading) ? "opacity-60 cursor-not-allowed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && (
        <span className="mr-2 h-3 w-3 animate-spin rounded-full border border-white border-t-transparent" />
      )}
      <span>{children}</span>
    </>
  );

  // If href exists render as Next Link + <a>
  if (href) {
    return (
      <Link href={href} legacyBehavior>
        <a className={allClasses} aria-disabled={disabled || loading} {...(rest as LinkButtonProps)}>
          {content}
        </a>
      </Link>
    );
  }

  // Otherwise render as a <button>
  return (
    <button
      className={allClasses}
      disabled={disabled || loading}
      {...(rest as RegularButtonProps)}
    >
      {content}
    </button>
  );
}