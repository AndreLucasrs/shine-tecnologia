import Link from "next/link";
import Spark from "@/components/Spark";

const links = [
  { href: "/projetos", label: "Projetos" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
];

export default function Nav() {
  return (
    <header className="border-b" style={{ borderColor: "var(--border)" }}>
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <Spark />
          Shine Tecnologia
        </Link>
        <ul className="flex gap-6 text-sm font-mono-label uppercase">
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
