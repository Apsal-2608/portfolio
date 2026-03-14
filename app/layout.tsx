import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Apsal | Cybersecurity & Network Engineering Portfolio",
  description:
    "Futuristic cybersecurity and network engineering portfolio of Mohamed Apsal from Madurai, India. Showcasing projects, skills, certifications, and experience.",
  metadataBase: new URL("https://apsal-portfolio-a41800b8.base44.app"),
  openGraph: {
    title: "Mohamed Apsal | Cybersecurity Portfolio",
    description:
      "Cybersecurity enthusiast and network engineering student specializing in network security, ethical hacking, and routing & switching.",
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

