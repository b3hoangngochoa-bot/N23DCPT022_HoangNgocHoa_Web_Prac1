import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Badge from "@/components/Badge";

// Fetch chi tiết bài viết theo id
async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

// Metadata động cho SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) return { title: "Bài viết không tồn tại" };
  return {
    title: `${post.title} | MYBLOG`,
    description: post.body.slice(0, 150),
  };
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ── Back link ── */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-900 uppercase tracking-widest transition-colors duration-200 group mb-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* ── Post header ── */}
        <header className="mb-10 pb-8 border-b border-zinc-100">
          {/* Post number */}
          <span className="text-[11px] font-mono text-zinc-400 tracking-widest uppercase mb-4 block">
            #{String(post.id).padStart(2, "0")} &nbsp;·&nbsp; Article
          </span>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-zinc-900 leading-snug tracking-tight capitalize mb-6">
            {post.title}
          </h1>

          {/* Author row */}
          <div className="flex items-center gap-3">
            {/* Avatar placeholder */}
            <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold font-mono">
                {post.userId}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-800 leading-none">
                User #{post.userId}
              </p>
              <p className="text-xs text-zinc-400 mt-0.5 font-mono">Author</p>
            </div>
          </div>
        </header>

        {/* ── Article body ── */}
        <article className="prose-custom">
          <p className="text-zinc-700 text-base sm:text-[1.05rem] leading-[1.9] whitespace-pre-line">
            {post.body}
          </p>
        </article>

        {/* ── Footer row ── */}
        <footer className="mt-12 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <Badge label="#blog" />
            <Badge label={`#post-${post.id}`} color="indigo" />
            <Badge label={`#user-${post.userId}`} color="green" />
          </div>

          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wide px-5 py-2.5 rounded-lg transition-colors duration-200 shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </footer>
      </main>

      {/* ── Footer ── */}
      <div className="border-t border-zinc-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-400">MYBLOG © 2026</span>
          <span className="text-xs text-zinc-400">Built with Next.js</span>
        </div>
      </div>
    </>
  );
}

