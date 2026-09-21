import Link from "next/link";
import { projects } from "@content/projects";
import { getAllPostsMeta, formatDate } from "@/lib/blog";

export default function Home() {
  const posts = getAllPostsMeta().slice(0, 3);

  return (
    <main className="mx-auto max-w-5xl px-6">
      <section className="py-20 sm:py-28">
        <p
          className="font-mono-label text-sm uppercase tracking-widest"
          style={{ color: "var(--accent)" }}
        >
          André Lucas — Shine Tecnologia
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-medium leading-tight sm:text-5xl">
          Software que resolve o problema de verdade, não o da demonstração.
        </h1>
        <p
          className="mt-6 max-w-xl text-lg leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Construo produtos de ponta a ponta — do pipeline de dados até a
          tela que o cliente usa — e uma biblioteca open-source pra colocar
          IA em produção na JVM sem depender de framework pesado.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/projetos"
            className="rounded-full px-5 py-2.5 text-sm font-medium transition"
            style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
          >
            Ver projetos
          </Link>
          <Link
            href="/sobre"
            className="rounded-full border px-5 py-2.5 text-sm font-medium transition"
            style={{ borderColor: "var(--border)" }}
          >
            Sobre mim
          </Link>
        </div>
      </section>

      <section className="border-t py-16" style={{ borderColor: "var(--border)" }}>
        <h2 className="text-2xl font-medium">Em destaque</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projetos/${project.slug}`}
              className="flex flex-col rounded-2xl border p-6 transition hover:-translate-y-0.5"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <span
                className="font-mono-label text-xs uppercase tracking-wide"
                style={{ color: "var(--accent)" }}
              >
                {project.status}
              </span>
              <h3 className="mt-3 text-xl font-medium">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {project.tagline}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t py-16" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-medium">Últimos posts</h2>
          <Link href="/blog" className="font-mono-label text-sm" style={{ color: "var(--accent)" }}>
            ver tudo →
          </Link>
        </div>
        <div className="mt-8 flex flex-col gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <p className="font-mono-label text-xs" style={{ color: "var(--muted)" }}>
                {formatDate(post.date)}
              </p>
              <h3 className="mt-1 text-lg font-medium transition group-hover:opacity-80">
                {post.title}
              </h3>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                {post.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
