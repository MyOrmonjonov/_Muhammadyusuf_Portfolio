interface FooterProps {
  name: string;
}

export const Footer = ({ name }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border px-6 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {year} {name}. Barcha huquqlar himoyalangan.
        </p>
        <a
          href="#top"
          className="transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-foreground"
        >
          Yuqoriga ↑
        </a>
      </div>
    </footer>
  );
};
