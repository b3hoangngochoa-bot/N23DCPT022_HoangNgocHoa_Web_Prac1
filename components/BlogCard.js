export default function BlogCard({ post }) {
  return (
    <article className="tech-card group flex flex-col rounded-xl border p-5 transition-all duration-200 sm:p-6">
      {/* Post number */}
      <span className="text-[11px] font-mono text-zinc-400 tracking-widest uppercase mb-3">
        #{String(post.id).padStart(2, "0")}
      </span>

      {/* Title */}
      <h2 className="font-semibold text-zinc-900 text-base leading-snug line-clamp-2 mb-2 group-hover:text-black transition-colors">
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-5">
        {post.body}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-zinc-300/60">
        <span className="text-xs text-zinc-400 font-mono">User {post.userId}</span>
        <a
          href={`/blog/${post.id}`}
          className="-my-2 -mr-2 inline-flex min-h-11 items-center gap-1.5 px-2 text-xs font-semibold text-zinc-900 hover:text-black group/link"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
}
