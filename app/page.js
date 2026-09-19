import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";

export const metadata = {
  title: "MYBLOG — Tech Articles",
  description: "Explore curated tech articles, tutorials, and insights.",
};

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Hero section ── */}
        <section className="py-14 sm:py-20 border-b border-zinc-100">
          <p className="text-[11px] font-mono text-zinc-400 tracking-widest uppercase mb-4">
            Tech Blog
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight tracking-tight max-w-2xl">
            Ideas worth reading.
          </h1>
          <p className="mt-4 text-zinc-500 text-base sm:text-lg max-w-xl leading-relaxed">
            A curated collection of tech articles, insights, and tutorials.
          </p>
        </section>

        {/* ── Posts grid ── */}
        <section className="py-10 sm:py-14">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
              Latest Posts — {posts.slice(0, 12).length} articles
            </span>
            <div className="h-px flex-1 bg-zinc-100 ml-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.slice(0, 12).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-100 mt-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-400">MYBLOG © 2026</span>
          <span className="text-xs text-zinc-400">Built with Next.js</span>
        </div>
      </footer>
    </>
  );
}
