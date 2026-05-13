import Link from "next/link";

type LegalSection = {
  heading: string;
  body: string;
};

type LegalPageProps = {
  title: string;
  effectiveDate: string;
  intro?: string;
  sections: LegalSection[];
};

const legalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Refund", href: "/refund" },
  { label: "EULA", href: "/eula" }
];

export function LegalPage({ title, effectiveDate, intro, sections }: LegalPageProps) {
  return (
    <main className="relative z-10 min-h-screen px-5 py-16 text-slate-100 sm:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-blue-500/10 blur-3xl" />
      <article className="relative mx-auto max-w-3xl rounded-[1.75rem] border border-blue-300/15 bg-white/[0.045] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.36)] backdrop-blur-sm sm:p-8 lg:p-10">
        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-blue-200 transition hover:text-white"
        >
          Back to Shotmap Studio
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
          Shotmap Studio Legal
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-none text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm font-medium text-slate-400">
          Effective Date: {effectiveDate}
        </p>
        {intro ? <p className="mt-6 text-base leading-8 text-slate-300">{intro}</p> : null}

        <div className="mt-10 grid gap-7 text-slate-300">
          {sections.map((section) => (
            <section key={section.heading} className="grid gap-2">
              <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
              <p className="text-base leading-8">{section.body}</p>
            </section>
          ))}
        </div>

        <nav
          aria-label="Legal navigation"
          className="mt-12 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6 text-sm font-semibold text-blue-200"
        >
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/" className="sm:ml-auto transition hover:text-white">
            Shotmap Studio
          </Link>
        </nav>
      </article>
    </main>
  );
}
