import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "@content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return { title: project.name, description: project.tagline };
}

export default function ProjetoPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span
        className="font-mono-label text-xs uppercase tracking-wide"
        style={{ color: "var(--accent)" }}
      >
        {project.status}
      </span>
      <h1 className="mt-3 text-3xl font-medium">{project.name}</h1>
      <p className="mt-3 text-lg" style={{ color: "var(--muted)" }}>
        {project.tagline}
      </p>

      <p className="prose-shine mt-8">{project.description}</p>

      <div className="mt-8 flex flex-wrap gap-2">
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

      <div className="mt-10 flex gap-4">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-5 py-2.5 text-sm font-medium"
            style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </main>
  );
}
