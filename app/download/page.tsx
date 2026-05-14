import Link from "next/link";
import { downloads, getDownload, getDownloadsByCategory } from "@/lib/downloads";

const legalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "EULA", href: "/eula" },
  { label: "Refund", href: "/refund" },
  { label: "Privacy", href: "/privacy" }
];

export const metadata = {
  title: "Download Shotmap Studio",
  description: "Download Shotmap Studio for Mac and sample export files."
};

export default function DownloadPage() {
  const appDownload = getDownload("mac-app");
  const sampleDownloads = getDownloadsByCategory("sample");
  const legalDownloads = getDownloadsByCategory("legal");

  return (
    <main className="relative z-10 min-h-screen px-5 py-10 text-white sm:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-blue-200 transition hover:text-white"
        >
          Back to Shotmap Studio
        </Link>

        <section className="pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
            Shotmap Studio
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-none text-white sm:text-6xl">
            Download Shotmap Studio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Download the app freely. Start a trial or activate a purchased license inside the app.
          </p>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          {appDownload ? (
            <article className="rounded-[1.25rem] border border-blue-300/25 bg-white/[0.07] p-7 shadow-cinematic sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
                    Mac App
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">
                    {appDownload.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                    {appDownload.description}
                  </p>
                </div>
                <span className="w-fit rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-100">
                  {appDownload.version}
                </span>
              </div>

              {appDownload.available ? (
                <a
                  href={`/download/${appDownload.slug}`}
                  className="mt-8 inline-flex rounded-full bg-electric px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
                >
                  Download for Mac
                </a>
              ) : (
                <span className="mt-8 inline-flex rounded-full border border-white/10 px-7 py-3 text-sm font-semibold text-slate-400">
                  Installer Coming Soon
                </span>
              )}

              <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 text-sm leading-6 text-slate-400 sm:grid-cols-2">
                <p>Requires macOS. The installer should be signed and notarized before release.</p>
                <p>Need a license? The app handles trial start, license entry, and activation.</p>
              </div>
              {appDownload.checksum ? (
                <div className="mt-5 rounded-xl border border-white/10 bg-[#0a0a0d]/55 p-4 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                    SHA-256
                  </p>
                  <p className="mt-2 break-all font-mono text-xs leading-5 text-slate-400">
                    {appDownload.checksum}
                  </p>
                </div>
              ) : null}
            </article>
          ) : null}

          <section className="rounded-[1.25rem] border border-blue-300/20 bg-white/[0.06] p-7 shadow-cinematic sm:p-8">
            <h2 className="text-xl font-semibold text-white">Install Notes</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>Download the Mac installer, open it, and move Shotmap Studio into Applications.</p>
              <p>The website does not need accounts yet. Licensing stays inside the app so this page can remain simple.</p>
              <p>Use the checksum to verify the DMG after downloading if needed.</p>
            </div>
          </section>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <DownloadGroup title="Sample Export PDF" downloads={sampleDownloads} />
          <DownloadGroup title="Legal Documents" downloads={legalDownloads} compact />
        </div>

        <nav className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 px-4 py-2 transition hover:border-blue-300/50 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
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
