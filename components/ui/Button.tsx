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
  disabled?: boolean;
};

type LinkButtonProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    type?: never;
  };

type RegularButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

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
    loading = false,
    href,
    disabled = false,
    ...rest
  } = props;

  const isDisabled = disabled || loading;

  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-medium shadow-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black";

  const allClasses = [
    baseClasses,
    getVariantClasses(variant),
    getSizeClasses(size),
    isDisabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && (
        <span
          aria-hidden="true"
          className="mr-2 h-3 w-3 animate-spin rounded-full border border-current border-t-transparent"
        />
      )}
      <span>{children}</span>
      {loading && <span className="sr-only">Loading</span>}
    </>
  );

  if (href) {
    const isDisabled = !!(disabled || loading);
  
    const { onClick, tabIndex, ...linkRest } =
      rest as Omit<LinkButtonProps, "href">;
  
    return (
      <Link
        {...linkRest}
        href={href}
        className={allClasses}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : tabIndex}
        onClick={(e) => {
          if (isDisabled) e.preventDefault();
          onClick?.(e);
        }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={allClasses}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      type={(rest as RegularButtonProps).type ?? "button"}
      {...(rest as RegularButtonProps)}
    >
      {content}
    </button>
  );
}