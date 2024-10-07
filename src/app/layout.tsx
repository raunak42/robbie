import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nippo = localFont({
  src: "../../public/fonts/Nippo-Variable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-alpino",
});

export const metadata: Metadata = {
  title: "Robbie",
  description: "Your AI Assistant",
  icons: ["/robbie.svg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-text-cursor">
      <body className={nippo.className}>
        <main className="bg-black">{children}</main>
      </body>
    </html>
  );
}
