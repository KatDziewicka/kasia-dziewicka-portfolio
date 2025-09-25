import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kasia Dziewicka - Software Engineer",
  description: "Software engineering portfolio of Kasia Dziewicka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
