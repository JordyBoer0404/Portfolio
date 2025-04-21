import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jordy Boer Portfolio",
  description:
    "Welkom, mijn naam is Jordy Boer. Ik ben een gemotiveerde junior software engineer met een passie voor ontwikkeling en technologie. Op deze website vind je mijn projecten, vaardigheden en meer informatie over mij.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased w-full h-auto`}>
        {children}
      </body>
    </html>
  );
}
