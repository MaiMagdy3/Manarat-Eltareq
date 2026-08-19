import type { ReactNode } from "react";

export function PageHeader({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-3">
          {title}
        </h1>
        <p className="text-muted max-w-2xl font-body">{body}</p>
      </div>
    </div>
  );
}

export function Box({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl border border-border bg-panel p-6">{children}</div>;
}

export function BoxGrid({ children }: { children: ReactNode }) {
  return <div className="grid md:grid-cols-2 gap-6">{children}</div>;
}
