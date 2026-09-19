"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", isActive: (pathname) => pathname === "/" },
  { href: "/about", label: "About", isActive: (pathname) => pathname === "/about" },
  {
    href: "/#articles",
    label: "Articles",
    isActive: (pathname) => pathname.startsWith("/blog/"),
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="tech-nav sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-base font-bold tracking-tight text-[#252823] hover:text-black transition-colors">
          MY<span className="text-[#95745d]">BLOG</span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = item.isActive(pathname);

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-9 items-center justify-center rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "bg-[#252823] font-bold text-[#f6f1e8]"
                    : "text-[#5f625b] hover:bg-[#d8d3c9] hover:text-[#252823]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <button className="min-h-9 rounded-lg bg-[#252823] px-4 py-2 text-xs font-semibold tracking-wide text-[#f6f1e8] uppercase transition-colors duration-200 hover:bg-black">
          Subscribe
        </button>
      </div>
    </header>
  );
}
