import Link from "next/link";

const links = [
  { href: "/projetos", label: "Projetos" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
];

export default function Nav() {
  return (
    <header className="border-b" style={{ borderColor: "var(--border)" }}>
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Shine<span style={{ color: "var(--accent)" }}>Tecnologia</span>
        </Link>
        <ul className="flex gap-6 text-sm font-mono-label uppercase tracking-wide">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="opacity-80 transition hover:opacity-100"
                style={{ color: "var(--fg)" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
