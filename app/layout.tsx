import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Apsal | System Administrator · Networking · Cloud · Cybersecurity",
  description:
    "Professional portfolio of Mohamed Apsal, a System Administrator with 6 months of experience in Windows administration, networking, cybersecurity, cloud fundamentals, and IT automation.",
  metadataBase: new URL("https://portfolio-ten-vert-71.vercel.app"),
  openGraph: {
    title: "Mohamed Apsal | System Administrator Portfolio",
    description:
      "System Administrator specializing in Windows support, networking, cybersecurity, cloud fundamentals, and Python-based IT automation.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-cyberBg text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

