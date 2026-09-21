import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostsMeta, formatDate } from "@/lib/blog";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-medium">Blog</h1>
      <p className="mt-3" style={{ color: "var(--muted)" }}>
        Bastidores dos projetos, decisões de infra e o que aprendo escrevendo
        software de verdade.
      </p>

      <div className="mt-10 flex flex-col gap-10">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <p className="font-mono-label text-xs" style={{ color: "var(--muted)" }}>
              {formatDate(post.date)}
            </p>
            <h2 className="mt-1 text-xl font-medium transition group-hover:opacity-80">
              {post.title}
            </h2>
            <p className="mt-2" style={{ color: "var(--muted)" }}>
              {post.summary}
            </p>
            <div className="mt-3 flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-label rounded-full border px-2.5 py-1 text-xs"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
