import Link from "next/link";

export function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-bold text-center">{children}</h1>;
}

export function SectionDivider() {
  return <hr className="border-t-2 border-foreground/10 my-8" />;
}

export function SectionHeader({ id, children }: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 id={id} className="text-lg font-semibold mt-6 mb-2">
      {children}
    </h2>
  );
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-base leading-relaxed my-3">{children}</p>;
}

export function InlineLink({ href, internal = false, children }: {
  href: string;
  internal?: boolean;
  children: React.ReactNode;
}) {
  const cls = "underline underline-offset-2 hover:opacity-70 transition-opacity";
  if (internal) {
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {children}
    </a>
  );
}
