const links = [
  { label: "Terms", href: "/legal/shotmap-terms.docx" },
  { label: "EULA", href: "/legal/shotmap-eula.docx" },
  { label: "Privacy", href: "/legal/shotmap-privacy.docx" },
  { label: "Refund", href: "/legal/shotmap-refund.docx" }
];

export function Footer() {
  return (
    <footer className="relative z-30 border-t border-blue-300/10 px-5 py-8 text-center sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
        <p>Shotmap Studio</p>
        <nav className="flex items-center gap-5" aria-label="Legal links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-slate-400 transition hover:text-blue-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
