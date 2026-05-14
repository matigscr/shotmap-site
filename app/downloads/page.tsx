import Link from "next/link";
import { downloads, getDownloadsByCategory } from "@/lib/downloads";

export const metadata = {
  title: "Other Downloads | Shotmap Studio",
  description: "Download Shotmap Studio sample exports and legal documents."
};

export default function DownloadsPage() {
  const sampleDownloads = getDownloadsByCategory("sample");
  const legalDownloads = getDownloadsByCategory("legal");

  return (
    <main className="relative z-10 min-h-screen px-5 py-10 text-white sm:px-8 lg:py-14">
      <div className="mx-auto max-w-5xl">
        <nav className="flex items-center justify-between gap-4 text-sm">
          <Link href="/download" className="font-semibold text-blue-200 transition hover:text-white">
            Back to app download
          </Link>
          <Link href="/" className="text-slate-400 transition hover:text-white">
            Shotmap Studio
          </Link>
        </nav>

        <section className="pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
            Resources
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-none text-white sm:text-6xl">
            Sample and legal downloads.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A quieter place for files that support the app without interrupting the trial flow.
          </p>
        </section>

        <div className="mt-14 grid gap-8">
          <DownloadGroup title="Sample Export PDF" downloads={sampleDownloads} />
          <DownloadGroup title="Legal Documents" downloads={legalDownloads} compact />
        </div>
      </div>
    </main>
  );
}

type DownloadGroupProps = {
  title: string;
  downloads: typeof downloads;
  compact?: boolean;
};

function DownloadGroup({ title, downloads, compact = false }: DownloadGroupProps) {
  return (
    <section className="rounded-[1.25rem] border border-blue-300/20 bg-white/[0.06] p-6 shadow-cinematic">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className={compact ? "mt-5 grid gap-4 sm:grid-cols-2" : "mt-5 space-y-4"}>
        {downloads.map((download) => (
          <article
            key={download.slug}
            className="rounded-xl border border-white/10 bg-[#0a0a0d]/55 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-white">{download.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{download.description}</p>
              </div>
              <span className="shrink-0 rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-100">
                {download.version ?? download.sizeLabel}
              </span>
            </div>
            {download.available ? (
              <a
                href={`/download/${download.slug}`}
                className="mt-5 inline-flex rounded-full bg-electric px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
              >
                Download
              </a>
            ) : (
              <span className="mt-5 inline-flex rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-400">
                Coming Soon
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
