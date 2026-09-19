import Header from "@/components/Header";
import Badge from "@/components/Badge";

export const metadata = {
  title: "About | MYBLOG",
  description: "Learn more about MYBLOG and its editorial focus.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8">
        <Badge label="About MYBLOG" color="copper" />
        <h1 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          A quiet place for useful ideas about technology.
        </h1>
        <div className="tech-surface mt-8 space-y-5 rounded-2xl p-5 text-base leading-relaxed text-zinc-600 sm:p-9">
          <p>
            MYBLOG collects practical notes, technical perspectives, and small ideas worth keeping.
          </p>
          <p>
            The focus is simple: clear writing, thoughtful details, and technology that helps people make better work.
          </p>
        </div>
      </main>
    </>
  );
}
