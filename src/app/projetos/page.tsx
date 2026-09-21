import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@content/projects";

export const metadata: Metadata = { title: "Projetos" };

export default function ProjetosPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-medium">Projetos</h1>
      <p className="mt-3 max-w-xl" style={{ color: "var(--muted)" }}>
        Um produto real em produção, uma biblioteca open-source e o app que
        prova que ela funciona fora da documentação.
      </p>

      <div className="mt-10 flex flex-col gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projetos/${project.slug}`}
            className="flex flex-col gap-2 rounded-2xl border p-6 transition hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <div>
              <span
                className="font-mono-label text-xs uppercase tracking-wide"
                style={{ color: "var(--accent)" }}
              >
                {project.status}
              </span>
              <h2 className="mt-2 text-xl font-medium">{project.name}</h2>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                {project.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-label rounded-full border px-2.5 py-1 text-xs"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
