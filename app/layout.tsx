import type { Metadata } from "next";
import { ParallaxWrapper } from "@/components/background/ParallaxWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shotmap Studio",
  description:
    "Plan and communicate complex camera coverage with speed and total clarity."
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
