import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

const neueMontreal = localFont({
  src: "../public/fonts/NeueMontreal.otf",
  variable: "--font-neue-montreal",
});

export const metadata: Metadata = {
  title: "Frost Labs - Where code feels like magic ⛄.",
  description: "Where code feels like magic ⛄.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable} ${poppins.variable} ${neueMontreal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
