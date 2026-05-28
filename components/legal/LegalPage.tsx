import Link from "next/link";

type LegalSection = {
  heading: string;
  body: string;
};

type LegalPageProps = {
  title: string;
  lastUpdated?: string;
  intro?: string;
  pdfHref?: string;
  html?: string;
  sections?: LegalSection[];
};

const legalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Refund", href: "/refund" },
  { label: "Desktop EULA", href: "/eula" },
  { label: "Access Terms", href: "/access-subscription-terms" }
];

export function LegalPage({ title, lastUpdated = "May 2026", intro, pdfHref, html, sections = [] }: LegalPageProps) {
  return (
    <main className="relative z-10 min-h-screen px-5 py-16 text-slate-100 sm:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-blue-500/10 blur-3xl" />
      <article className="relative mx-auto max-w-4xl rounded-[1.75rem] border border-blue-300/15 bg-white/[0.045] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.36)] backdrop-blur-sm sm:p-8 lg:p-10">
        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-blue-200 transition hover:text-white"
        >
          Back to Shotmap Studio
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
          Shotmap Studio Legal
        </p>
        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold leading-none text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm font-medium text-slate-400">
              Last Updated: {lastUpdated}
            </p>
          </div>
          {pdfHref ? (
            <a
              href={pdfHref}
              className="inline-flex min-h-[42px] shrink-0 items-center justify-center rounded-full border border-blue-300/30 bg-blue-400/10 px-5 py-2 text-sm font-semibold text-blue-100 transition hover:border-blue-300/60 hover:bg-blue-400/16"
            >
              Download PDF
            </a>
          ) : null}
        </div>
        {intro ? <p className="mt-6 text-base leading-8 text-slate-300">{intro}</p> : null}

        {html ? (
          <div
            className="legal-document mt-10 overflow-x-auto text-slate-300 [&_h2]:mt-8 [&_h2]:border-t [&_h2]:border-white/10 [&_h2]:pt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_li]:leading-7 [&_p]:text-base [&_p]:leading-8 [&_strong]:font-semibold [&_strong]:text-slate-100 [&_table]:my-5 [&_table]:w-full [&_table]:min-w-[42rem] [&_table]:border-collapse [&_table]:text-left [&_table]:text-sm [&_td]:border [&_td]:border-white/15 [&_td]:p-3 [&_td]:align-top [&_th]:border [&_th]:border-white/15 [&_th]:bg-white/[0.08] [&_th]:p-3 [&_th]:font-semibold [&_th]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <div className="mt-10 grid gap-7 text-slate-300">
            {sections.map((section) => (
              <section key={section.heading} className="grid gap-2">
                <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
                <p className="text-base leading-8">{section.body}</p>
              </section>
            ))}
          </div>
        )}

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
