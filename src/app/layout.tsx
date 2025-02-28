import type { Metadata } from "next";
import { Rubik_Glitch } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Links Redirect",
};

const rubikGlitch = Rubik_Glitch({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rubik-glitch'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubikGlitch.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
