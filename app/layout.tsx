import type { Metadata } from "next";
import { ParallaxWrapper } from "@/components/background/ParallaxWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Shotmap Studio",
    template: "%s | Shotmap Studio"
  },
  description:
    "Plan and communicate complex camera coverage with speed and total clarity.",
  applicationName: "Shotmap Studio",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png"
  },
  openGraph: {
    title: "Shotmap Studio",
    description:
      "Plan and communicate complex camera coverage with speed and total clarity.",
    siteName: "Shotmap Studio",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Shotmap Studio",
    description:
      "Plan and communicate complex camera coverage with speed and total clarity."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ParallaxWrapper />
        {children}
      </body>
    </html>
  );
}
