import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://johndoe.dev";

export const metadata: Metadata = {
  title: "Mohammed BOULOUD | Developer Portfolio",
  description:
    "Engineering student at EHTP specializing in Geomatics & GIS. Passionate about low-level programming, reverse engineering, and full-stack development.",
  keywords: [
    "portfolio",
    "developer",
    "C++",
    "Python",
    "reverse engineering",
    "CTF",
    "geomatics",
    "GIS",
    "EHTP",
    "Morocco",
  ],
  authors: [{ name: "Mohammed BOULOUD" }],
  openGraph: {
    title: "Mohammed BOULOUD | Developer Portfolio",
    description:
      "Engineering student at EHTP specializing in Geomatics & GIS. Passionate about low-level programming, reverse engineering, and full-stack development.",
    url: baseUrl,
    siteName: "Mohammed BOULOUD – Portfolio",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Mohammed BOULOUD – Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed BOULOUD | Developer Portfolio",
    description:
      "Engineering student at EHTP specializing in Geomatics & GIS. Passionate about low-level programming, reverse engineering, and full-stack development.",
    site: "@bouloud94",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: "/favicon.ico",
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  if (theme === 'light') document.documentElement.classList.remove('dark');
                  else document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="grain min-h-full bg-background text-foreground font-sans">
        <ThemeProvider>
          <JsonLd />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
