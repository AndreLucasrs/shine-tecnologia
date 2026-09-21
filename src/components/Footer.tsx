export default function Footer() {
  return (
    <footer
      className="mt-24 border-t px-6 py-10"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="mx-auto flex max-w-5xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between"
        style={{ color: "var(--muted)" }}
      >
        <p>Shine Tecnologia — software sob medida, um projeto real por vez.</p>
        <div className="flex gap-4 font-mono-label">
          <a
            href="https://github.com/AndreLucasrs"
            className="transition hover:opacity-100"
            style={{ color: "var(--fg)" }}
          >
            GitHub
          </a>
          <a
            href="mailto:contato@shinetecnologia.com.br"
            className="transition hover:opacity-100"
            style={{ color: "var(--fg)" }}
          >
            contato@shinetecnologia.com.br
          </a>
        </div>
      </div>
    </footer>
  );
}
