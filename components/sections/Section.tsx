type SectionProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
  };
  
  export default function Section({ children, className = "", id }: SectionProps) {
    return (
      <section
        id={id}
        className={`
          w-full
          max-w-5xl mx-auto   /* centers horizontally */
          px-6                /* global side padding */
          py-24               /* vertical spacing */
          ${className}
        `}
      >
        {children}
      </section>
    );
  }