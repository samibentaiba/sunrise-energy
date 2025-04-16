import { ReactNode } from "react";

interface PolicyLayoutProps {
  title: string;
  children: ReactNode;
}

export default function PolicyLayout({ children }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto prose prose-slate lg:prose-lg">
          {children}
        </div>
      </main>
    </div>
  );
}
