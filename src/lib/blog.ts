import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostMeta(slug: string): PostMeta {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(source);
  return {
    slug,
    title: data.title,
    date: data.date,
    summary: data.summary,
    tags: data.tags ?? [],
  };
}

export function getPostContent(slug: string): { meta: PostMeta; content: string } {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  return {
    meta: {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
      tags: data.tags ?? [],
    },
    content,
  };
}

export function getAllPostsMeta(): PostMeta[] {
  return getAllPostSlugs()
    .map(getPostMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(dateStr: string): string {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
