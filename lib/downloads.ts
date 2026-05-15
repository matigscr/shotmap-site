export type DownloadCategory = "app" | "sample" | "legal";

export type DownloadAsset = {
  slug: string;
  title: string;
  description: string;
  filename: string;
  publicPath: string | null;
  externalUrl?: string;
  contentType: string;
  category: DownloadCategory;
  available: boolean;
  version?: string;
  sizeLabel?: string;
  checksum?: string;
};

export const downloads: DownloadAsset[] = [
  {
    slug: "mac-app",
    title: "Shotmap Studio for Mac",
    description: "Download the macOS app. Activation happens inside the app with a valid license.",
    filename: "Shotmap-Studio-1.0.1.dmg",
    publicPath: "/downloads/Shotmap-Studio-1.0.1.dmg",
    contentType: "application/x-apple-diskimage",
    category: "app",
    available: true,
    version: "v1.0.1",
    sizeLabel: "27 MB universal",
    checksum: "bb188f3e843f20fd1d3fe3b5c509c618f58f5d6448f7f04cfe4d98d13d175036"
  },
  {
    slug: "sample-export",
    title: "Sample Export PDF",
    description: "A crew-ready Shotmap export with camera labels, legend, and notes.",
    filename: "shotmap-sample-export.pdf",
    publicPath: "/downloads/sample-export.pdf",
    contentType: "application/pdf",
    category: "sample",
    available: true,
    sizeLabel: "PDF"
  },
  {
    slug: "terms",
    title: "Terms of Service",
    description: "The current Shotmap Studio terms document.",
    filename: "shotmap-terms.docx",
    publicPath: "/legal/shotmap-terms.docx",
    contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    category: "legal",
    available: true,
    sizeLabel: "DOCX"
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    description: "The current Shotmap Studio privacy document.",
    filename: "shotmap-privacy.docx",
    publicPath: "/legal/shotmap-privacy.docx",
    contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    category: "legal",
    available: true,
    sizeLabel: "DOCX"
  },
  {
    slug: "refund",
    title: "Refund Policy",
    description: "The current Shotmap Studio refund policy document.",
    filename: "shotmap-refund.docx",
    publicPath: "/legal/shotmap-refund.docx",
    contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    category: "legal",
    available: true,
    sizeLabel: "DOCX"
  },
  {
    slug: "eula",
    title: "End User License Agreement",
    description: "The current Shotmap Studio EULA document.",
    filename: "shotmap-eula.docx",
    publicPath: "/legal/shotmap-eula.docx",
    contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    category: "legal",
    available: true,
    sizeLabel: "DOCX"
  }
];

export function getDownload(slug: string) {
  return downloads.find((download) => download.slug === slug);
}

export function getDownloadsByCategory(category: DownloadCategory) {
  return downloads.filter((download) => download.category === category);
}
