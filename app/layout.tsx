import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SmartShala | Intelligent Software and AI Agency",
    template: "%s | SmartShala",
  },
  description:
    "SmartShala builds custom software, mobile apps, backend systems, cloud automation, and AI workflows for startups and growing businesses.",
  metadataBase: new URL("https://smartshala.com"),
  openGraph: {
    title: "SmartShala | Intelligent Software and AI Agency",
    description:
      "Build intelligent software that grows your business with SmartShala.",
    url: "https://smartshala.com",
    siteName: "SmartShala",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
