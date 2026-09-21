import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostContent, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  try {
    const { meta } = getPostContent(params.slug);
    return { title: meta.title, description: meta.summary };
  } catch {
    return {};
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  let meta, content;
  try {
    ({ meta, content } = getPostContent(params.slug));
  } catch {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono-label text-xs" style={{ color: "var(--muted)" }}>
        {formatDate(meta!.date)}
      </p>
      <h1 className="mt-2 text-3xl font-medium">{meta!.title}</h1>
      <div className="mt-3 flex gap-4">
        {meta!.tags.map((tag) => (
          <span
            key={tag}
            className="tag-underline font-mono-label text-xs"
            style={{ color: "var(--muted)" }}
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="prose-shine mt-10">
        <MDXRemote source={content!} />
      </div>
    </main>
  );
}
