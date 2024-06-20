import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactChakraProviders } from "@/providers/ReactChakraProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TODO App",
  description: "Create a todo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactChakraProviders>{children}</ReactChakraProviders>
      </body>
    </html>
  );
}
