import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Photo Album Template",
  description: "A shareable trip photo album — point it at your own R2 bucket and photos to make it yours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${playfairDisplay.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#0d0d0d] text-white">
        <MotionProvider>
          <main className="min-h-screen">{children}</main>
        </MotionProvider>
      </body>
    </html>
  );
}
