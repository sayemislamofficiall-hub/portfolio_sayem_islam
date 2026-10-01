import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sayem Islam | Full-Stack Developer",
  description:
    "Personal portfolio of Sayem Islam, a Full-Stack Developer from Dinajpur, Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}