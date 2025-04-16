import type { ReactNode } from "react";

interface PolicySectionProps {
  title?: string;
  children: ReactNode;
}

export default function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-black mt-12 mb-6">{title}</h2>
      <div className="text-black">{children}</div>
    </section>
  );
}
