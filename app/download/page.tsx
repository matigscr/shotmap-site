import Image from "next/image";
import Link from "next/link";
import { getDownload } from "@/lib/downloads";

export const metadata = {
  title: "Download Shotmap Studio",
  description: "Download Shotmap Studio for Mac and start your trial in the app."
};

export default function DownloadPage() {
  const appDownload = getDownload("mac-app");

  return (
    <main className="relative z-10 min-h-screen overflow-hidden px-5 py-8 text-white sm:px-8 lg:py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-blue-500/10 blur-3xl" />
      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col">
        <nav className="flex items-center justify-between gap-4 text-sm">
          <Link href="/" className="font-semibold text-blue-200 transition hover:text-white">
            Back to Shotmap Studio
          </Link>
          <Link href="/downloads" className="text-slate-400 transition hover:text-white">
            Other downloads
          </Link>
        </nav>

        <section className="flex flex-1 items-center justify-center py-16">
          <div className="relative w-full max-w-3xl text-center">
            <div className="pointer-events-none absolute left-1/2 top-28 h-80 w-80 -translate-x-1/2 rounded-[50%] bg-blue-400/18 blur-3xl" />
            <Image
              src="/shotmap-app-icon.png"
              alt="Shotmap Studio"
              width={128}
              height={128}
              priority
              sizes="128px"
              className="relative mx-auto h-32 w-32 object-contain drop-shadow-[0_0_28px_rgba(59,130,246,0.6)]"
              draggable={false}
            />

            <p className="relative mt-8 text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
              Shotmap Studio
            </p>
            <h1 className="relative mx-auto mt-5 max-w-3xl text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
              Download for Mac.
            </h1>
            <p className="relative mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Install the app. Start your trial or activate your license inside Shotmap Studio.
            </p>

            <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              {appDownload?.available ? (
                <a
                  href={`/download/${appDownload.slug}`}
                  className="inline-flex justify-center rounded-full bg-electric px-9 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
                >
                  Download for Mac
                </a>
              ) : (
                <span className="inline-flex justify-center rounded-full border border-white/10 px-9 py-3.5 text-sm font-semibold text-slate-400">
                  Installer Coming Soon
                </span>
              )}
              <Link
                href="/buy"
                className="inline-flex justify-center rounded-full border border-white/15 bg-white/[0.06] px-9 py-3.5 text-sm font-semibold text-white transition hover:border-blue-300/60 hover:bg-white/12"
              >
                Buy License
              </Link>
            </div>

            <div className="relative mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-500">
              <span>{appDownload?.version ?? "Latest version"}</span>
              <span>{appDownload?.sizeLabel ?? "Mac installer"}</span>
              <span>Intel + Apple Silicon</span>
            </div>

            <div className="relative mx-auto mt-12 grid max-w-2xl gap-3 border-t border-white/10 pt-6 text-sm leading-6 text-slate-400 sm:grid-cols-3">
              <p>Open the DMG.</p>
              <p>Move to Applications.</p>
              <p>Start trial in app.</p>
            </div>

            {appDownload?.checksum ? (
              <details className="relative mx-auto mt-6 max-w-2xl text-left">
                <summary className="cursor-pointer text-center text-sm font-semibold text-blue-200 transition hover:text-white">
                  SHA-256 checksum
                </summary>
                <p className="mt-3 break-all rounded-xl border border-white/10 bg-[#0a0a0d]/55 p-4 font-mono text-xs leading-5 text-slate-500">
                  {appDownload.checksum}
                </p>
              </details>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}
