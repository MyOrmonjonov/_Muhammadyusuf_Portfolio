interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  name: string;
}

const links: NavLink[] = [
  { label: "Men haqimda", href: "#about" },
  { label: "Loyihalar", href: "#projects" },
  { label: "Ko'nikmalar", href: "#skills" },
  { label: "Bog'lanish", href: "#contact" },
];

export const Nav = ({ name }: NavProps) => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-surface-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-foreground transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-accent"
        >
          {name}
        </a>
        <nav aria-label="Asosiy navigatsiya">
          <ul className="flex items-center gap-6 text-sm">
            {links.map((link) => (
              <li key={link.href} className="hidden sm:block">
                <a
                  href={link.href}
                  className="text-muted-foreground transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="rounded-full border border-surface-border bg-surface px-4 py-2 text-foreground transition-colors duration-[var(--duration-fast)] ease-entrance hover:border-accent hover:text-accent"
              >
                Bog&apos;lanish
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
