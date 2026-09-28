import type { PropsWithChildren } from "react";

type SectionContainerProps = PropsWithChildren<{
  id: string;
  className?: string;
}>;

export function SectionContainer({ id, className, children }: SectionContainerProps) {
  const composedClassName = [
    "w-full px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={composedClassName}>
      {children}
    </section>
  );
}
