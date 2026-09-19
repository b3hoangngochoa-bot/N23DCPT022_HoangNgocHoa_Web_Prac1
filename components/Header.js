import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-base font-bold tracking-tight text-zinc-900 hover:text-black transition-colors">
          MY<span className="text-zinc-400">BLOG</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            Home
          </Link>
          <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            About
          </a>
          <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            Articles
          </a>
        </nav>

        {/* CTA */}
        <button className="text-xs font-semibold tracking-wide uppercase bg-zinc-900 hover:bg-black text-white px-4 py-2 rounded-lg transition-colors duration-200">
          Subscribe
        </button>
      </div>
    </header>
  );
}